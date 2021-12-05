import { handleRequest as handleOriginRequest } from "./router";
import { Config } from "./types";

export async function handleRequest(
  uri: string,
  config: Config
): Promise<Response> {
  const currentCaches = caches.default
  const { protocol, hostname, pathname } = new URL(uri);
  const cacheKey = `custom:cache` // `${protocol}//${hostname}${pathname}`;
  // const cacheKey = `${protocol}//${hostname}${pathname}`;
  // const cacheKey = `custom:${hostname}${pathname}`;
  const cache = await currentCaches.match(cacheKey);
  console.log("cache -> ", cache);
  
  if (cache) {
    console.log("Cache Hit!", cacheKey);
    return cache; // use cache
  }

  try {
    console.log("No Cache Hit...", cacheKey);
    const { status, contentType, response } = await handleOriginRequest(
      pathname,
      config
    );
    // put cache if contents exists
    if (status === 200) {
      console.log("Response -> ", response);
      console.log("contentType -> ", contentType);
      const actualResponse = new Response(response, {
        status,
        headers: { "content-type": contentType },
      });
      // Avoid Error: "Body has already been used. It can only be used once. Use tee() first if you need to read it twice."
      console.log("Create Cache...", config.site.lastBuildDate, cacheKey);
      await currentCaches.put(cacheKey, new Response(response, actualResponse));
      console.log("Was the cache really created?", await currentCaches.match(cacheKey))
      return actualResponse;
    }
    return new Response(response, {
      status,
      headers: { "content-type": contentType },
    });
  } catch (error) {
    // FIXME: Render Error Styling Pages
    return new Response(error.message, {
      status: 500,
      headers: { "content-type": "text/html" },
    });
  }
}
