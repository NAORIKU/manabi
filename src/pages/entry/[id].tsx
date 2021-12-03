import React from "react";
import ReactDOMServer from "react-dom/server";
import { Config, Site } from "../../types";
import Entry from "../../components/entry";
import {toHTML} from "../index";

export const renderEntry = async (issueId: number, config: Config): Promise<string> => {
    const content = ReactDOMServer.renderToString(React.createElement(Entry));
    return toHTML({ site: config.site, content: content });
};