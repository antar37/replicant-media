import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { test } from "node:test";
import { projects } from "../lib/portfolio.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const requestedDomains = [
  "elapapachocafe.com",
  "icv.mx",
  "daniloscares.org",
  "dwtx.org",
  "clewa.org",
  "waterpurification.co.uk",
  "patricktoscano.com",
];

test("portfolio starts with seven distinct, visitable projects", () => {
  assert.equal(projects.length, requestedDomains.length);
  assert.deepEqual(projects.map(({ domain }) => domain), requestedDomains);
  for (const project of projects) {
    assert.equal(new URL(project.url).hostname.replace(/^www\./, ""), project.domain);
    assert.ok(project.name && project.summary && project.category);
    assert.ok(project.image.startsWith("/static/work/") && project.image.endsWith(".webp"));
    assert.ok(existsSync(resolve(root, "public", project.image.slice(1))), project.image);
  }
});
