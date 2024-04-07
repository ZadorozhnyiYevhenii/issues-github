import { useState } from "react";
import { RepositoryList } from "../ RepositoryList/RepositoryList";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { UISearchInput } from "../UI/UISearchInput";
import { useFetchWithdebounce } from "../../hooks/useFetchWithDebounce";
import { getSearchRepositories } from "../../api/getCalls/getSearchRepositories";
import { setIsPrevRepo } from "../../app/slices/isPrevRepoSlice";
import {
  setCurrentLink,
  setCurrentRepoName,
  setPrevRepoName,
} from "../../app/slices/repositoryNameSlice";
import "./SearchBar.scss";

export const SearchBar = () => {
  const [searchRepository, setSearchRepository] = useState("");
  const dispatch = useAppDispatch();
  const { currentRepoName, prevRepoName } = useAppSelector(
    (state) => state.repositoryName
  );

  const { repositories, isLoading, setRepositories } = useFetchWithdebounce(
    searchRepository,
    getSearchRepositories,
    300
  );

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchRepository(searchValue);
  };

  const handleChooseRepo = (id: number) => {
    const choseRepo = repositories?.items.find((repo) => repo.id === id);
    const prevStoredItems = localStorage.getItem("prevColumns");
    const storedItems = localStorage.getItem("currentColumns");

    if (choseRepo?.full_name === prevRepoName && prevStoredItems) {
      localStorage.setItem("currentColumns", prevStoredItems);
      dispatch(setIsPrevRepo(true));
    } else {
      localStorage.setItem("currentColumns", storedItems as string);
    }
    localStorage.setItem("prevColumns", storedItems as string);
    dispatch(setCurrentLink(choseRepo?.html_url));
    dispatch(setPrevRepoName(currentRepoName as string));
    dispatch(setCurrentRepoName(choseRepo?.full_name as string));
    setSearchRepository("");
    setRepositories(null);
  };

  return (
    <div className="search-bar">
      <UISearchInput
        placeholder="Enter repo URL"
        loading={isLoading}
        onChange={handleChange}
        value={searchRepository}
      />
      <RepositoryList
        repositories={repositories?.items}
        onRepoChoose={handleChooseRepo}
      />
    </div>
  );
};
