import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";

import { askOpenRouter } from "../lib/openrouter.js";

const originalFetch = globalThis.fetch;
const originalKey = process.env.OPENROUTER_API_KEY;

function stubFetch(handler) {
  globalThis.fetch = handler;
}

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

beforeEach(() => {
  process.env.OPENROUTER_API_KEY = "test-key";
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalKey === undefined) delete process.env.OPENROUTER_API_KEY;
  else process.env.OPENROUTER_API_KEY = originalKey;
});

test("askOpenRouter reports a missing key instead of calling the network", async () => {
  delete process.env.OPENROUTER_API_KEY;
  let called = false;
  stubFetch(async () => {
    called = true;
    return jsonResponse({});
  });

  const reply = await askOpenRouter("what is a bioplastic?");
  assert.match(reply, /offline/);
  assert.equal(called, false);
});

test("askOpenRouter sends the model, system prompt and user message", async () => {
  let body;
  stubFetch(async (_url, init) => {
    body = JSON.parse(init.body);
    return jsonResponse({ choices: [{ message: { content: "  Use less.  " } }] });
  });

  const reply = await askOpenRouter("How do I start?", "Case study: school fees");
  assert.equal(reply, "Use less.");
  assert.equal(body.messages[1].content, "How do I start?");
  assert.match(body.messages[0].content, /Plastic Pal/);
  assert.match(body.messages[0].content, /school fees/);
  assert.ok(body.max_tokens <= 300, "the tutor must stay cheap to run");
});

test("repeated prompts are served from the in-process cache", async () => {
  let calls = 0;
  stubFetch(async () => {
    calls += 1;
    return jsonResponse({ choices: [{ message: { content: "cached answer" } }] });
  });

  const first = await askOpenRouter("Why recycle?");
  const second = await askOpenRouter("  why RECYCLE?  ");
  assert.equal(first, "cached answer");
  assert.equal(second, "cached answer");
  assert.equal(calls, 1, "normalised duplicates must not hit the network twice");
});

test("an HTTP error is surfaced, not thrown", async () => {
  stubFetch(async () => new Response("quota exceeded", { status: 429 }));

  const reply = await askOpenRouter("anything");
  assert.match(reply, /error \(429\)/);
  assert.match(reply, /quota exceeded/);
});

test("an empty completion falls back to a safe message", async () => {
  stubFetch(async () => jsonResponse({ choices: [] }));

  const reply = await askOpenRouter("anything else");
  assert.match(reply, /No response from the AI service/);
});
