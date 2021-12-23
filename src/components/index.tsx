import React from "react";
import {Issue} from "../domains/issue";
import {Site} from "../types";
import Header from "../components/header"

// FIXME: Site is domain...?
type Props = {
    issues: Issue[];
    site: Site;
};

export default function ({ issues, site }: Props) {
    return <div>
        <Header />
        <h1>Hello World</h1>
        {issues.map((issue, idx) => <div key={idx}>
            <h3>
                <a href={`/entry/${issue.id}`}>{issue.title}</a>
            </h3>
            <p className="mt-[22px]">{issue.bodyText}</p>
        </div>)}
    </div>
}