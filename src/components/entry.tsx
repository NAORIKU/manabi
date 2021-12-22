import React from "react";
import {Issue} from "../domains/issue";

type Props = {
    issue: Issue;
};
export default function ({issue}: Props) {
    const html = { __html: issue.bodyHTML };
    return <div className="max-w-[620px] mx-auto">
        <h1><a href={`/entry/${issue.id}`}>{issue.title}</a></h1>
        <article dangerouslySetInnerHTML={html} />
    </div>
}