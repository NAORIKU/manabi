import { handleRequest } from "./proxy";
import { Config } from "./types";

const getConfig = (): Config => {
  const lastBuildDate = process.env.BUILD_DATE;
  if (!lastBuildDate) {
    throw new Error("BUILD_DATE must be required.");
  }
  return {
    site: {
      title: "manabi",
      lastBuildDate,
    },
  };
};

const getResponse = async (request: Request): Promise<Response> => {
  try {
    const config = getConfig();
    return handleRequest(request.url, config);
  } catch (e) {
    // FIXME: Render Error Styling Pages
    return new Response(e.message, {
      status: 500,
      headers: { "content-type": "text/html" },
    });
  }
};

addEventListener("fetch", (event) => {
  event.respondWith(getResponse(event.request));
});
