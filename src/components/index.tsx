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
        <div className="mx-auto max-w-[1024px] mt-[24px] mobile-portrait:mt-[16px] mobile-landscape:px-[40px] mobile-portrait:px-[16px]">
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <span className="relative block bg-white rounded-[12px] overflow-hidden w-full h-full">
                        <img className="absolute inset-0 object-cover object-center w-full h-full blur-[42px] scale-150" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAPAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9yPAP/BX/APZK8WS6JaeLZfiL8Ipdb8PW2rwax498C6rJ4OGovaQXF9olv4n8NnWra5m055mQ308Gn6ddLESt1DNNBA/m5dxFlGZU70sbQp1or97hq9SNKtSd7O8ZuKnG+04OUWmr2b5V6eY5DmmW1FGthK06UnaliaNOVSjU0vZSgm4yS3hJJpp2uld+uD/gp5+wiwDL+0N4ddWAKunhvx86Op5DI6eEyrqw5VlJVgQQSCDXpfXcEtHi8Kn2eIopr1XOed9UxT1WFxLXdYes0/T3D/O31n9o/wCJ3iaSJ/Efi3W7+xtbS7tdMsLK6TRtPtDcpPNALLSdKgs9G061h1GSO6ktbDS7NJlUp8kjLNB5eGyfAYV2oYWhCTXvyUE5Stp79SXNUntZc05adlodeJzPG4q3tsVWmov3U5tRjd392nHlhHv7sY7vqOX9p744W6i3g+J/xBjhgAhhRPFerKiRRDZGir9uOFVFAUZOAAM0f2Llb1eX4Bt6tvBYZtt7tt07v1Y1m+ZpJLMccktEliq6SS0SS9roktkA/9k=" />
                        <span className="h-full inline-block">
                            <img className="absolute inset-0 object-cover object-center w-full h-full"
                                 src="https://source.unsplash.com/iIrB37J5yfA"
                            />
                        </span>
                    </span>
                </div>
                <div>
                    {issues.map((issue, idx) => <div key={idx}>
                        <h3>
                            <a href={`/entry/${issue.id}`}>{issue.title}</a>
                        </h3>
                    </div>)}
                </div>
            </div>

        </div>
    </div>
}