import { useEffect, useState } from "react";
import { IIssue } from "../types/IIssue";
import { useAppSelector } from "../app/hooks";
import { getRepositoryIssues } from "../api/getCalls/getRepositoryIssues";

export const useFetchIssues = (issueState: string) => {
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { repositoryName } = useAppSelector((state) => state.repository);

  useEffect(() => {
    const fetch = async () => {
      if (repositoryName) {
        try {
          setIsLoading(true);
          const data = await getRepositoryIssues(repositoryName, issueState);
          setIssues(data.items);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetch();
  }, [repositoryName, issueState]);

  return { isLoading, issues, setIssues };
};
