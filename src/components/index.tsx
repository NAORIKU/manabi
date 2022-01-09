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
        <div className="mx-auto max-w-[1024px] mt-[24px] mobile-landscape:mt-[0px] px-[40px] mobile-landscape:px-[0px]">
            <div className="grid grid-cols-2 mobile-landscape:grid-cols-1 gap-[2rem] mobile-landscape:gap-0">
                <div className="-skew-x-[10deg] px-[50px] mobile-landscape:px-[0px] mobile-landscape:-skew-x-0 mobile-landscape:h-[280px]">
                    <span className="relative block bg-white overflow-hidden w-full h-full">
                        <img className="absolute inset-0 object-cover object-center w-full h-full blur-[42px] scale-150" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAPAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9yPAP/BX/APZK8WS6JaeLZfiL8Ipdb8PW2rwax498C6rJ4OGovaQXF9olv4n8NnWra5m055mQ308Gn6ddLESt1DNNBA/m5dxFlGZU70sbQp1or97hq9SNKtSd7O8ZuKnG+04OUWmr2b5V6eY5DmmW1FGthK06UnaliaNOVSjU0vZSgm4yS3hJJpp2uld+uD/gp5+wiwDL+0N4ddWAKunhvx86Op5DI6eEyrqw5VlJVgQQSCDXpfXcEtHi8Kn2eIopr1XOed9UxT1WFxLXdYes0/T3D/O31n9o/wCJ3iaSJ/Efi3W7+xtbS7tdMsLK6TRtPtDcpPNALLSdKgs9G061h1GSO6ktbDS7NJlUp8kjLNB5eGyfAYV2oYWhCTXvyUE5Stp79SXNUntZc05adlodeJzPG4q3tsVWmov3U5tRjd392nHlhHv7sY7vqOX9p744W6i3g+J/xBjhgAhhRPFerKiRRDZGir9uOFVFAUZOAAM0f2Llb1eX4Bt6tvBYZtt7tt07v1Y1m+ZpJLMccktEliq6SS0SS9roktkA/9k=" />
                        <span className="h-full inline-block">
                            <img className="scale-150 skew-x-[10deg] mobile-landscape:skew-x-0 absolute inset-0 object-cover object-center w-full h-full"
                                 src="https://source.unsplash.com/iIrB37J5yfA"
                            />
                        </span>
                    </span>
                </div>
                <div className="my-[64px] mobile-landscape:my-[48px] mobile-landscape:px-[40px] mobile-portrait:px-[16px]">
                    <h1 className="mb-[16px]">
                        <svg height="40" viewBox="0 0 119 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8262 0.188935L15.3481 19.6221H10.3517L6.8735 8.98785L4.9964 19.6221H0L3.50576 0.188935H8.64018L12.0631 10.1215L13.8574 0.188935H18.8262Z" fill="#002844"/>
                            <path d="M29.0748 19.6221L29.2404 15.3846H24.6305L23.2778 19.6221H18.0054L25.0997 0.188935H34.2092L34.3196 19.6221H29.0748ZM27.943 4.91228L25.7622 11.7679H29.3784L29.6821 4.91228H27.943Z" fill="#002844"/>
                            <path d="M47.4541 0C51.8892 0 54.1068 1.77238 54.1068 5.31714C54.1068 5.91093 54.0424 6.54971 53.9136 7.23347L52.9474 12.6316C52.5057 15.1327 51.5488 16.9861 50.0765 18.1916C48.6043 19.3972 46.534 20 43.8656 20C41.1971 20 39.3384 19.3972 38.2895 18.1916C37.5718 17.3639 37.2129 16.2213 37.2129 14.7638C37.2129 14.1161 37.2865 13.4053 37.4337 12.6316L38.3999 7.23347C39.2648 2.41116 42.2829 0 47.4541 0ZM44.6109 15.8165C45.531 15.8165 46.2671 15.5825 46.8192 15.1147C47.3713 14.6469 47.7578 13.7832 47.9786 12.5236L48.9172 7.34143C48.9724 6.98156 49 6.65767 49 6.36977C49 4.91228 48.2455 4.18354 46.7364 4.18354C44.8409 4.21952 43.7091 5.27216 43.3411 7.34143L42.4025 12.5236C42.3289 12.9735 42.2921 13.4413 42.2921 13.9271C42.2921 15.1867 43.065 15.8165 44.6109 15.8165Z" fill="#002844"/>
                            <path d="M66.5581 0.188935C68.656 0.188935 70.1467 0.638778 71.03 1.53846C71.6925 2.22222 72.0238 3.08592 72.0238 4.12956C72.0238 4.48943 71.987 4.8673 71.9134 5.26316L71.5269 7.36842C71.3061 8.53801 70.9196 9.48268 70.3675 10.2024C69.8338 10.9222 69.2357 11.435 68.5732 11.7409L71.0852 19.6221H65.5091L63.1904 12.3617H61.4789L60.3471 19.6221H55.0471L58.5528 0.188935H66.5581ZM64.819 4.39946H62.7487L62.031 9.09582H63.9633C64.9386 9.09582 65.638 8.8709 66.0612 8.42105C66.4845 7.95322 66.6961 7.34143 66.6961 6.5857C66.6961 5.12821 66.0704 4.39946 64.819 4.39946Z" fill="#002844"/>
                            <path d="M81.637 0.188935L78.1589 19.6221H73.1625L76.6682 0.188935H81.637Z" fill="#002844"/>
                            <path d="M101.326 0.188935L95.0049 9.9865L97.8205 19.6221H92.5757L90.5054 12.4966H88.3246L87.0272 19.6221H82.0584L85.5642 0.188935H90.533L89.0699 8.2861H90.8366L96.0815 0.188935H101.326Z" fill="#002844"/>
                            <path d="M113.866 18.2186C112.412 19.4062 110.351 20 107.682 20C105.014 20 103.164 19.3972 102.134 18.1916C101.398 17.3639 101.03 16.2213 101.03 14.7638C101.03 14.1161 101.103 13.4053 101.25 12.6316L103.486 0.188935H108.455L106.219 12.5236C106.146 12.9735 106.109 13.4413 106.109 13.9271C106.109 15.1867 106.882 15.8165 108.428 15.8165C109.348 15.8165 110.084 15.5825 110.636 15.1147C111.188 14.6469 111.574 13.7832 111.795 12.5236L114.031 0.188935H119L116.764 12.6316C116.304 15.1507 115.338 17.013 113.866 18.2186Z" fill="#002844"/>
                        </svg>
                    </h1>
                    <p className="mb-[36px]">I'm NAORIKU — Engineer from Japan.</p>
                    <h2 className="mb-[8px]">Featured Posts</h2>
                    {issues.map((issue, idx) => <div key={idx} className="mb-[16px]">
                        <a href={`/entry/${issue.id}`}>
                            <h3 className="text-lg font-bold underline mb-[1px]">
                                {issue.title}
                            </h3>
                            <p className="truncate">{issue.bodyText}</p>
                        </a>
                    </div>)}
                </div>
            </div>

        </div>
    </div>
}