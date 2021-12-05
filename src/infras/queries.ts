export const getIssues = `
  query issues($q: String!, $cursor: String) { 
    search(
      type: ISSUE,
      query: $q,
      first: 100,
      after: $cursor
    ) {
      edges {
        node {
          ... on Issue {
            number,
            title,
            bodyHTML,
            bodyText,
            labels(first:5) {
              nodes { name }
            },
            url,
            createdAt
            comments(first: 1){
              totalCount
            }
          }
        }
      },
      pageInfo {
        endCursor,
        hasNextPage
      }
    }
  }
`;

export const getIssue = `
query issue($owner: String!, $repo: String!, $id: Int!) {
  repository(owner: $owner, name: $repo) {
    issue(number: $id) {
      number
      title
      bodyHTML
      bodyText
      labels(first: 5) {
        nodes {
          name
        }
      }
      url
      createdAt,
      comments(first: 1){
        totalCount
      }
    }
  }
}
`;
