import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useFetchWithdebounce = <T>(searchValue: string, fetchFunc: (value: string) => Promise<T>, delay: number) => {
  const [repositories, setRepositories] = useState<T | null>(null);
  const debounceSearch = useDebounce(searchValue, delay);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        if (debounceSearch.length > 2) {
          const data = await fetchFunc(debounceSearch);
          setRepositories(data);
        } else {
          setRepositories(null);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
      setIsLoading(false);
    };

    fetchRepositories();
  }, [debounceSearch, fetchFunc]);

  return {
    repositories,
    isLoading,
    setRepositories,
  }
}