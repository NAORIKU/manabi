import React from "react";
import ReactDOMServer from "react-dom/server";
import { Config, Site } from "../../types";
import Index from "../../components/index";
import { toHTML } from "../index";

export const renderTop = async (config: Config): Promise<string> => {
  const content = ReactDOMServer.renderToString(React.createElement(Index));
  return toHTML({ site: config.site, content: content });
};
