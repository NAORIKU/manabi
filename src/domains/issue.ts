import { IssueNode } from "../types";

// https://docs.github.com/en/graphql/reference/objects#issue
export interface Issue {
  id: number;
  title: string;
  bodyHTML: string;
  bodyText: string;
  labels: string[];
  url: string;
  pubDate: string;
  commentsTotalCount: number;
}

export class IssueSerializer {
  static fromJSON(node: IssueNode): Issue {
    const pubDate = new Date(node.createdAt).toUTCString();
    return {
      id: node.number,
      title: node.title,
      bodyHTML: node.bodyHTML,
      bodyText: node.bodyText,
      labels: node.labels.nodes.map((n) => n.name),
      url: node.url,
      pubDate,
      commentsTotalCount: node.comments.totalCount,
    };
  }
}
