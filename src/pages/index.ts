import { Config, Site } from "../types";
const css = require("../../styles/tailwind.css").toString();

interface ToHTMLParams {
  site: Site;
  content: string;
  title?: string;
  additionalHead?: string;
}

export const toHTML = ({
  title,
  site,
  content,
  additionalHead,
}: ToHTMLParams): string => {
  return `<!DOCTYPE html>
  <html lang="ja">
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="robots" content="noindex">
      <title>${title ?? site.title}</title>
      <style>${css.toString()}</style>
      ${additionalHead || ""}
    </head>
    <body>${content}</body>
  </html>`;
};
