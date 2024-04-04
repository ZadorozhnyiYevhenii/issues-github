import { useState } from "react";
import { UIButton } from "../UI/Button";
import { UISearchInput } from "../UI/UISearchInput";
import "./Header.scss";
import { getSearchRepositories } from "../../api/getCalls/getSearchRepositories";

export const Header = () => {
  const [searchRepository, setSearchRepository] = useState('');

  const onButtonClick = async () => {
    await getSearchRepositories(searchRepository)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    setSearchRepository(searchValue)
  };

  return (
    <header className="header">
      <UISearchInput
        placeholder="Enter repo URL"
        loading
        onChange={handleChange}
        value={searchRepository}
      />
      <UIButton onClick={onButtonClick}>Load issues</UIButton>
    </header>
  );
};
