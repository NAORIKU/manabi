import React from "react";
import ReactDOMServer from "react-dom/server";
import { Config, Site } from "../types";
import Index from "../components/index";

const renderIndex = async (config: Config): Promise<string> => {
  const content = ReactDOMServer.renderToString(React.createElement(Index));
  return toHTML({ site: config.site, content: content });
};

interface ToHTMLParams {
  site: Site;
  content: string;
}

const toHTML = ({ site, content }: ToHTMLParams): string => {
  const html = `<!DOCTYPE html>
  <html lang="ja">
      <title>${site.title}</title>
    </head>
    <body>${content}</body>
  </html>`;
  return html;
};

export { renderIndex };
