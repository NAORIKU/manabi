import { handleRequest as handleOriginRequest } from "./router";
import { Config } from "./types";

export async function handleRequest(
  uri: string,
  config: Config
): Promise<Response> {
  const currentCaches = await caches.open(config.site.lastBuildDate);
  const { protocol, hostname, pathname } = new URL(uri);
  const cacheKey = `${protocol}//${hostname}${pathname}`;
  const cache = await currentCaches.match(cacheKey);

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
      const actualResponse = new Response(response, {
        status,
        headers: { "content-type": contentType },
      });
      // Avoid Error: "Body has already been used. It can only be used once. Use tee() first if you need to read it twice."
      await currentCaches.put(cacheKey, actualResponse.clone());
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
