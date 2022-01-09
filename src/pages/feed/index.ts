import outdent from "outdent";
import { Config } from "../../types";
import { getIssues } from "../../infras/get_issues";

export const renderFeed = async (config: Config): Promise<string> => {
  const issues = await getIssues(config.github);
  const items = issues
    .map((issue) => {
      return outdent`
        <item>
            <title><![CDATA[${issue.title}]]></title>
            <description><![CDATA[${issue.bodyHTML}]]></description>
            <link>${config.site.siteURL}/entry/${issue.title}</link>
            <pubDate>${issue.pubDate}</pubDate>
        </item>`;
    })
    .join("");
  return outdent`
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"
        xmlns:atom="http://www.w3.org/2005/Atom"
        xmlns:content="http://purl.org/rss/1.0/modules/content/">
        <channel>
            <atom:link href="${config.site.siteURL}/feed" rel="self"/>
            <link>${config.site.siteURL}</link>
            <title>${config.site.title}</title>
            <description>${config.site.description}</description>
            <lastBuildDate>${config.site.lastBuildDate}</lastBuildDate>
            ${items}
        </channel>
    </rss>`;
};
