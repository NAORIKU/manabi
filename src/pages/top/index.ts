import React from "react";
import ReactDOMServer from "react-dom/server";
import { Config } from "../../types";
import Index from "../../components/index";
import { toHTML } from "../index";
import { getIssues } from "../../infras/get_issues";

export const renderTop = async (config: Config): Promise<string> => {
  const issues = await getIssues(config.github);
  const content = ReactDOMServer.renderToString(
    React.createElement(Index, {
      issues: issues.slice(0, 5),
      site: config.site,
    })
  );
  return toHTML({ site: config.site, content: content });
};
