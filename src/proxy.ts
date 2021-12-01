import { Config } from "./types";

export async function handleRequest(
  uri: string,
  config: Config
): Promise<Response> {
  const currentCaches = await caches.open(config.site.lastBuildDate);
  const url = new URL(uri);
  const cacheKey = `${url.protocol}//${url.hostname}${url.pathname}`
  const cache = await currentCaches.match(cacheKey);
  if (cache) {
    console.log("Cache Hit!", cacheKey);
    return cache; // use cache
  }
  return new Response(`request uri on: ${uri}, cacheKey: ${cacheKey}`);
}
