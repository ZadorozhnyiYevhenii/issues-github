import { BASE_URL } from "../core";

export const getSearchRepositories = async (repositoryName: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/repositories?q=${repositoryName}`
    );

    const repositoryData = await response.json();

    return repositoryData;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
