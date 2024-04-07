import { useEffect, useState } from "react";
import { IIssue } from "../types/IIssue";
import { useAppSelector } from "../app/hooks";
import { getRepositoryIssues } from "../api/getCalls/getRepositoryIssues";

export const useFetchIssues = (issueState: string) => {
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { currentRepoName } = useAppSelector((state) => state.repositoryName);

  useEffect(() => {
    const fetch = async () => {
      if (currentRepoName) {
        try {
          setIsLoading(true);
          const data = await getRepositoryIssues(currentRepoName, issueState);
          setIssues(data.items);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetch();
  }, [currentRepoName, issueState]);

  return { isLoading, issues, setIssues };
};