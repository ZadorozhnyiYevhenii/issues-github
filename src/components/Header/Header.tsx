import { useEffect, useState } from "react";
import { UIButton } from "../UI/UIButton";
import { UISearchInput } from "../UI/UISearchInput";
import { getSearchRepositories } from "../../api/getCalls/getSearchRepositories";
import { IRepository } from "../../types/IRepository";
import { RepositoryList } from "../ RepositoryList/RepositoryList";
import { useAppDispatch } from "../../app/hooks";
import { setRepositoryName } from "../../app/slices/repositorySlice";
import { useDebounce } from "../../hooks/useDebounce";
import "./Header.scss";

export const Header = () => {
  const [searchRepository, setSearchRepository] = useState("");
  const [repositories, setRepositories] = useState<IRepository | null>(null);
  const debounceSearch = useDebounce(searchRepository, 300);
  const dispatch = useAppDispatch();

  const onButtonClick = async () => {
    console.log(debounceSearch);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchRepository(searchValue);
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        if (debounceSearch.length > 2) {
          const data = await getSearchRepositories(debounceSearch);
          setRepositories(data);
        } else {
          setRepositories(null);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepositories();
  }, [debounceSearch]);

  const handleChooseRepo = (id: number) => {
    const choseRepo = repositories?.items.find((repo) => repo.id === id);
    dispatch(setRepositoryName(choseRepo));
    setRepositories(null);
  };

  return (
    <header className="header">
      <div className="header__search">
        <UISearchInput
          placeholder="Enter repo URL"
          loading={false}
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
