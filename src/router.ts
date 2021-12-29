import path from "path";
import { Config, ResponseInfo } from "./types";
import { NotFoundError } from "./errors";
import { renderTop } from "./pages/top";
import { renderEntry } from "./pages/entry/[id]";
import { renderFeed } from "./pages/feed";
import { renderRobots } from "./pages/robots";

type RenderType = "index" | "entry" | "feed" | "robots" | "";

/**
 * Return text and status for response.
 */
const handleRequest = async (
  pathname: string,
  config: Config
): Promise<ResponseInfo> => {
  let contentType = "";
  let response = "";

  try {
    switch (getRenderType(pathname)) {
      //
      //
      case "index":
        contentType = "text/html";
        response = await renderTop(config);
        break;
      //
      //
      case "entry":
        contentType = "text/html";
        const issueId = Number(path.basename(pathname));
        if (Number.isNaN(issueId)) {
          throw new NotFoundError(`IssueId: ${pathname} is not found`);
        }
        response = await renderEntry(issueId, config);
        break;
      //
      //
      case "feed":
        contentType = "application/xml";
        response = await renderFeed(config);
        break;
      //
      //
      case "robots":
        contentType = "text/plain";
        response = renderRobots();
        break;
      //
      //
      default:
        throw new NotFoundError();
    }
    return { contentType, response, status: 200 };
  } catch (error: any) {
    if (error instanceof NotFoundError) {
      return { contentType: "text/html", response: "Not Found", status: 404 };
    }
    return { contentType: "text/html", response: error?.message, status: 500 };
  }
};

const getRenderType = (pathname: string): RenderType => {
  if (pathname === "/") {
    return "index";
  }
  if (pathname.startsWith("/entry")) {
    return "entry";
  }
  return "";
};

export { handleRequest };
