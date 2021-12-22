import React from "react";
import {Issue} from "../domains/issue";

type Props = {
    issue: Issue;
};
export default function ({issue}: Props) {
    const html = { __html: issue.bodyHTML };
    return (<div className="mx-auto max-w-[620px] mobile-landscape:px-[40px] mobile-portrait:px-[16px]">
        <h1 className="text-2xl font-bold mb-[16px]"><a href={`/entry/${issue.id}`}>{issue.title}</a></h1>
        <div className="mb-[16px]">
            <time className="text-xs text-gray-500" dateTime={issue.pubDate}>{toJST(issue.pubDate)}</time>
        </div>
        <article className="markdown mobile-portrait:markdown-sm" dangerouslySetInnerHTML={html} />
    </div>)

    function toJST(timetext: string): string {
        const target = new Date(new Date(timetext).getTime() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
        return target.getFullYear() + "-" + (target.getMonth() + 1) + "-" + target.getDate() + " " + target.getHours() + ":" + target.getMinutes() + ":" + target.getSeconds();
    }
}