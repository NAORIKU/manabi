import React from "react";
import {Issue} from "../domains/issue";
import Header from "../components/header"

type Props = {
    issues: Issue[];
};
export default function ({issues}: Props) {
    return (<div>
        <Header />
        <div className="mx-auto max-w-[620px] mt-[24px] mobile-portrait:mt-[16px] mobile-landscape:px-[40px] mobile-portrait:px-[16px]">
            <h1 className="text-2xl font-bold mb-[16px]"><a href={`/blog`}>Blog</a></h1>
            <div className="mb-[16px]">
                {issues.map((issue, idx) => {
                    const previewText = issue.bodyText.length > 100 ?
                        issue.bodyText.slice(0, 100):
                        issue.bodyText;
                    return <div key={idx} className="mb-[16px]">
                        <a href={`/entry/${issue.id}`}>
                            <h3 className="text-lg font-bold underline mb-[1px]">
                                {issue.title}
                            </h3>
                            <p className="line-clamp-2 mb-[1px]">{previewText}</p>
                            <div>
                                <time className="text-xs text-gray-500" dateTime={issue.pubDate}>{toJST(issue.pubDate)}</time>
                            </div>
                        </a>
                    </div>
                })}
            </div>
        </div>
    </div>)

    function toJST(timetext: string): string {
        const target = new Date(new Date(timetext).getTime() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
        return target.getFullYear() + "-" + (target.getMonth() + 1) + "-" + target.getDate() + " " + target.getHours() + ":" + target.getMinutes() + ":" + target.getSeconds();
    }
}