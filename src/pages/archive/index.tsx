import React from "react";
import ReactDOMServer from "react-dom/server";
import {Config} from "../../types";
import {toHTML} from "../index";
import Archive from "../../components/archive";
import {getIssues} from "../../infras/get_issues";

export const renderArchive = async (config: Config): Promise<string> => {
    const issues = await getIssues(config.github);
    const content = ReactDOMServer.renderToString(React.createElement(Archive, { issues, site: config.site }));
    return toHTML({ site: config.site, content: content, title: `Blog | ${config.site.title}`})
}