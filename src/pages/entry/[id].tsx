import React from "react";
import ReactDOMServer from "react-dom/server";
import { Config, Site } from "../../types";
import Entry from "../../components/entry";
import {toHTML} from "../index";
import {NotFoundError} from "../../errors";
import {getIssue} from "../../infras/get_issue";

export const renderEntry = async (issueId: number, config: Config): Promise<string> => {
    const issue = await getIssue(issueId, config.github);
    if (issue === null) {
        throw new NotFoundError();
    }
    const content = ReactDOMServer.renderToString(React.createElement(Entry, { issue, site: config.site }));
    return toHTML({ site: config.site, content: content });
};
