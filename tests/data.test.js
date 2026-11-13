import { test } from "node:test";
import assert from "node:assert/strict";

import { caseStudies, tags } from "../data/caseStudies.js";
import { polymers, problems, impactFactors } from "../data/plastics.js";
import { solutions } from "../data/solutions.js";

test("the case-study library is complete and uniquely addressable", () => {
  assert.ok(caseStudies.length >= 5);
  const slugs = caseStudies.map((c) => c.slug);
  assert.equal(new Set(slugs).size, slugs.length, "slugs must be unique");
  for (const c of caseStudies) {
    assert.match(c.slug, /^[a-z0-9-]+$/, `bad slug: ${c.slug}`);
    for (const field of ["title", "place", "tag", "summary", "lesson"]) {
      assert.equal(typeof c[field], "string", `${c.slug} is missing ${field}`);
      assert.ok(c[field].trim().length > 0, `${c.slug}.${field} is empty`);
    }
    assert.ok(Array.isArray(c.details) && c.details.length > 0, `${c.slug} needs details`);
  }
});

test("the tag filter includes All and every case-study tag", () => {
  assert.equal(tags[0], "All");
  for (const c of caseStudies) {
    assert.ok(tags.includes(c.tag), `tag list is missing ${c.tag}`);
  }
});

test("every polymer documents its chemistry and lifetime", () => {
  assert.ok(polymers.length >= 4);
  for (const p of polymers) {
    for (const field of ["name", "monomer", "density", "source", "process", "life", "uses", "recycling"]) {
      assert.equal(typeof p[field], "string", `${p.name} is missing ${field}`);
      assert.ok(p[field].trim().length > 0, `${p.name}.${field} is empty`);
    }
  }
});

test("impact factors are positive numbers", () => {
  const values = Object.values(impactFactors);
  assert.ok(values.length > 0);
  for (const v of values) {
    assert.equal(typeof v, "number");
    assert.ok(Number.isFinite(v) && v > 0);
  }
});

test("problems and solutions are paired, non-empty lists", () => {
  assert.ok(problems.length > 0);
  assert.ok(solutions.length > 0);
  for (const item of [...problems, ...solutions]) {
    assert.equal(typeof item, "object");
    assert.ok(Object.values(item).some((v) => typeof v === "string" && v.trim()));
  }
});
