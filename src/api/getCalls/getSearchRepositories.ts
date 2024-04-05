import { IRepository } from "../../types/IRepository";
import { BASE_URL, token } from "../core";

export const getSearchRepositories = async (repositoryName: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/repositories?q=${repositoryName}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const repositoryData: IRepository = await response.json();

    return repositoryData;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
