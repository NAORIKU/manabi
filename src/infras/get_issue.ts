import { GitHub, IssueResponse } from "../types";
import { getIssue as query } from "./queries";
import { Issue, IssueSerializer } from "../domains/issue";
import { graphql } from "@octokit/graphql";

export const getIssue = async (
  issueId: number,
  github: GitHub
): Promise<Issue | null> => {
  const [owner, repo] = github.repository.split("/");
  const issue: IssueResponse = await graphql(query, {
    owner: owner,
    repo: repo,
    id: issueId,
    headers: { authorization: `token ${github.accessToken}` },
  });
  return issue.repository.issue
    ? IssueSerializer.fromJSON(issue.repository.issue)
    : null;
};
