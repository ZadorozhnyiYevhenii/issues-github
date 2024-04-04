import { useState } from "react";
import { UIButton } from "../UI/UIButton";
import { UISearchInput } from "../UI/UISearchInput";
import { getSearchRepositories } from "../../api/getCalls/getSearchRepositories";
import { RepositoryList } from "../ RepositoryList/RepositoryList";
import { useAppDispatch } from "../../app/hooks";
import { setCurrentRepository } from "../../app/slices/repositorySlice";
import "./Header.scss";
import { useFetchWithdebounce } from "../../hooks/useFetchWithDebounce";

export const Header = () => {
  const [searchRepository, setSearchRepository] = useState("");
  const dispatch = useAppDispatch();

  const { repositories, isLoading, setRepositories } = useFetchWithdebounce(
    searchRepository,
    getSearchRepositories,
    300
  );

  const onButtonClick = async () => {
    console.log("1");
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchRepository(searchValue);
  };

  const handleChooseRepo = (id: number) => {
    const choseRepo = repositories?.items.find((repo) => repo.id === id);
    dispatch(setCurrentRepository(choseRepo));
    setRepositories(null);
  };

  return (
    <header className="header">
      <div className="header__search">
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
      <UIButton onClick={onButtonClick}>Load issues</UIButton>
    </header>
  );
};
