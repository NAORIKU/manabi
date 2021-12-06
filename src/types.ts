export interface Site {
  title: string;
  lastBuildDate: string;
}

export interface GitHub {
  accessToken: string;
  repository: string;
  author: string;
  label?: string /* if you want filtering by label */;
}

export interface Config {
  site: Site;
  github: GitHub;
}

interface LabelNode {
  name: string;
}

export interface IssueNode {
  // issue id
  number: number;
  title: string;
  bodyHTML: string;
  bodyText: string;
  labels: { nodes: LabelNode[] };
  url: string;
  createdAt: string;
  comments: {
    totalCount: number;
  };
}

interface Edge {
  node: IssueNode;
}

export interface IssuesResponse {
  search: {
    edges: Edge[];
    pageInfo: PageInfo;
  };
}

export interface IssueResponse {
  repository: {
    issue: IssueNode;
  };
}

export interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

export type ResponseInfo = {
  contentType: string;
  response: string;
  status: number;
};
