import React from "react";
import {Issue} from "../domains/issue";
import Header from "../components/header"
import Footer from "../components/footer"

type Props = {
    issue: Issue;
};
export default function ({issue}: Props) {
    const html = { __html: issue.bodyHTML };
    return (<div>
        <Header />
        <div className="mx-auto max-w-[620px] mt-[24px] mb-[48px] mobile-portrait:mt-[16px] mobile-landscape:px-[40px] mobile-portrait:px-[16px]">
            <h1 className="text-2xl font-bold mb-[16px]"><a href={`/entry/${issue.id}`}>{issue.title}</a></h1>
            <div className="mb-[16px]">
                <time className="text-xs text-gray-500" dateTime={issue.pubDate}>{toJST(issue.pubDate)}</time>
            </div>
            <article className="prose mobile-portrait:prose-sm" dangerouslySetInnerHTML={html} />
        </div>
        <Footer className="max-w-[624px]" />
    </div>)

    function toJST(timetext: string): string {
        const target = new Date(new Date(timetext).getTime() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
        return target.getFullYear() + "-" + (target.getMonth() + 1) + "-" + target.getDate() + " " + `0${target.getHours()}`.slice(-2) + ":" + `0${target.getMinutes()}`.slice(-2) + ":" + `0${target.getSeconds()}`.slice(-2);
    }
}