import { IIssueResponse } from "../../types/IIssue";
import { BASE_URL, token } from "../core";

export const getRepositoryIssues = async (repositoryName: string, issueState: string): Promise<IIssueResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/issues?q=${repositoryName}+${issueState}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const issuesData: Promise<IIssueResponse> = response.json();

    return issuesData;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
