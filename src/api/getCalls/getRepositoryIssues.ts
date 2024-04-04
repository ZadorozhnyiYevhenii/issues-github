import { BASE_URL } from "../core";

export const getRepositoryIssues = async (repositoryName: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/issues?q=${repositoryName}`
    );

    const issuesData = response.json();

    return issuesData;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
