/**
 * Thin, dependency-free wrapper around the OpenRouter chat-completions API.
 *
 * Green-computing notes:
 *  - Runs on the Edge runtime (no cold Node server).
 *  - Tiny model + small max_tokens to keep inference cost and latency low.
 *  - A tiny in-process LRU-style cache absorbs repeated questions so the
 *    same prompt is never paid for twice.
 *  - The API key is read from a server-side env var and is never sent to
 *    the browser.
 */

const MODEL = process.env.OPENROUTER_MODEL || 'google/gemini-2.0-flash-001';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://plastic-waste-conservation.vercel.app';

const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes
const CACHE_MAX = 50;

const cache = new Map();

function readCache(key) {
  const hit = cache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.at > CACHE_TTL_MS) {
    cache.delete(key);
    return null;
  }
  return hit.value;
}

function writeCache(key, value) {
  if (cache.size >= CACHE_MAX) {
    const oldest = cache.keys().next().value;
    cache.delete(oldest);
  }
  cache.set(key, { at: Date.now(), value });
}

function buildSystemPrompt(context) {
  return [
    'You are "Plastic Pal", a friendly tutor for Class 9 students.',
    'Explain plastic waste and conservation strategies in short bullet points (max 3 bullets).',
    'Be factual, encouraging, and use simple English. Never invent statistics or studies -',
    'if you are unsure, say so and point the student to the case study page instead.',
    'Answer in under 90 words.',
    '',
    'Case studies context:',
    context
  ].join('\n');
}

export async function askOpenRouter(userMessage, caseStudyContext = '') {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return 'Chatbot is offline: the server has no OPENROUTER_API_KEY configured. Add it in the environment variables on Vercel (Settings > Environment Variables) and redeploy.';
  }

  const cacheKey = `${MODEL}::${userMessage.trim().toLowerCase()}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': SITE_URL,
      'X-Title': 'Plastic Waste Conservation Strategy'
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: buildSystemPrompt(caseStudyContext) },
        { role: 'user', content: userMessage }
      ],
      max_tokens: 220,
      temperature: 0.4
    })
  });

  if (!res.ok) {
    const detail = await res.text();
    return `The AI service returned an error (${res.status}). ${detail.slice(0, 160)}`;
  }

  const data = await res.json();
  const reply =
    data?.choices?.[0]?.message?.content?.trim() || 'No response from the AI service.';

  writeCache(cacheKey, reply);
  return reply;
}
