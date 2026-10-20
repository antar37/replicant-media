import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

// The Worker is an ES module while this static-export project has no `type: module`.
const source = await readFile(new URL("../src/worker.js", import.meta.url), "utf8");
const { default: worker } = await import(`data:text/javascript,${encodeURIComponent(source)}`);

function assets(status = 404) {
  const requests = [];
  return {
    requests,
    fetch(request) {
      requests.push(request.url);
      return Promise.resolve(new Response(status === 404 ? "Not found" : "Page", { status }));
    },
  };
}

test("canonical host and scheme redirect in one hop, preserving path and query", async () => {
  const store = assets();
  for (const [url, expected] of [
    ["http://replicant.media/seo?q=test", "https://replicant.media/seo?q=test"],
    ["https://www.replicant.media/work", "https://replicant.media/work"],
    ["http://www.replicant.media/google-ads", "https://replicant.media/google-ads"],
  ]) {
    const response = await worker.fetch(new Request(url), { ASSETS: store });
    assert.equal(response.status, 301);
    assert.equal(response.headers.get("location"), expected);
  }
  assert.equal(store.requests.length, 0);
});

test("unmatched assets keep their real 404 status", async () => {
  const store = assets();
  const response = await worker.fetch(new Request("https://replicant.media/not-a-page"), {
    ASSETS: store,
  });
  assert.equal(response.status, 404);
  assert.deepEqual(store.requests, ["https://replicant.media/not-a-page"]);
});

test("existing assets still work", async () => {
  const store = assets(200);
  const response = await worker.fetch(new Request("https://replicant.media/seo"), {
    ASSETS: store,
  });
  assert.equal(response.status, 200);
});
