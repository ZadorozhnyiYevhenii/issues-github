import { useState } from "react";
import { RepositoryList } from "../ RepositoryList/RepositoryList";
import { useAppDispatch } from "../../app/hooks";
import { UISearchInput } from "../UI/UISearchInput";
import { useFetchWithdebounce } from "../../hooks/useFetchWithDebounce";
import { getSearchRepositories } from "../../api/getCalls/getSearchRepositories";
import { setCurrentRepository } from "../../app/slices/repositorySlice";
import './SearchBar.scss';

export const SearchBar = () => {
  const [searchRepository, setSearchRepository] = useState("");
  const dispatch = useAppDispatch();

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
    dispatch(setCurrentRepository(choseRepo));
    setSearchRepository('');
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
