import { useState } from "react";
import { UIButton } from "../UI/UIButton";
import { UISearchInput } from "../UI/UISearchInput";
import { getSearchRepositories } from "../../api/getCalls/getSearchRepositories";
import { IRepository } from "../../types/IRepository";
import { RepositoryList } from "../ RepositoryList/RepositoryList";
import "./Header.scss";

export const Header = () => {
  const [searchRepository, setSearchRepository] = useState("");
  const [repositories, setRepositories] = useState<IRepository | null>(null);

  const onButtonClick = async () => {
    console.log('click')
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchRepository(searchValue)

    const data = await getSearchRepositories(searchRepository);
    setRepositories(data);
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
        <RepositoryList repositories={repositories?.items} />
      </div>
      <UIButton onClick={onButtonClick}>Load issues</UIButton>
    </header>
  );
};
