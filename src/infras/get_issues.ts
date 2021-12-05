import { graphql } from "@octokit/graphql";
import { getIssues as query } from "./queries";
import { Issue, IssueSerializer } from "../domains/issue";
import { PageInfo, GitHub, IssuesResponse } from "../types";

export const getIssues = async (github: GitHub): Promise<Issue[]> => {
  const issues = [];
  const page: PageInfo = { endCursor: null, hasNextPage: true };

  let q = `repo:${github.repository} author:${github.author} state:open`;
  if (github.label) {
    q += ` label:"${github.label}"`;
  }

  while (page.hasNextPage) {
    const {
      search: { edges, pageInfo },
    }: IssuesResponse = await graphql(query, {
      q,
      cursor: page.endCursor,
      headers: { authorization: `token ${github.accessToken}` },
    });
    for (const { node } of edges) {
      const issue = IssueSerializer.fromJSON(node);
      issues.push(issue);
    }
    page.endCursor = pageInfo.endCursor;
    page.hasNextPage = pageInfo.hasNextPage;
  }

  // sort title desc
  return issues.sort((a, b) => (a.id > b.id ? -1 : 1));
};
