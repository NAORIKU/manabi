import { Config, Site } from "../types";

interface ToHTMLParams {
  site: Site;
  content: string;
}

export const toHTML = ({ site, content }: ToHTMLParams): string => {
  const html = `<!DOCTYPE html>
  <html lang="ja">
      <title>${site.title}</title>
    </head>
    <body>${content}</body>
  </html>`;
  return html;
};
