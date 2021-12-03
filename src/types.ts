export interface Site {
  title: string;
  lastBuildDate: string;
}

export interface Config {
  site: Site;
}

export type ResponseInfo = {
  contentType: string;
  response: string;
  status: number;
};
