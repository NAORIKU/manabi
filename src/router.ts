import { Config, ResponseInfo } from "./types";
import { NotFoundError } from "./errors";
import { renderIndex } from "./pages/index";

type RenderType = "index" | "";

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
      case "index":
        contentType = "text/html";
        response = await renderIndex(config);
        break;
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
  return "";
};

export { handleRequest };
