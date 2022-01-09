import { handleRequest } from "./proxy";
import { Config } from "./types";

const getConfig = (): Config => {
  const lastBuildDate = process.env.BUILD_DATE;
  if (!lastBuildDate) {
    throw new Error("BUILD_DATE must be required.");
  }
  const accessToken = process.env.GITHUB_TOKEN;
  if (!accessToken) {
    throw new Error("GITHUB_TOKEN must be required.");
  }
  return {
    site: {
      title: "manabi",
      description: "Today I Learned for my children.",
      lastBuildDate,
      siteURL: "https://manabi.naoriku.dev",
    },
    github: {
      accessToken,
      repository: "NAORIKU/manabi",
      author: "NAORIKU",
      label: "public",
    },
  };
};

const getResponse = async (request: Request): Promise<Response> => {
  try {
    const config = getConfig();
    return handleRequest(request.url, config);
  } catch (e: any) {
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
