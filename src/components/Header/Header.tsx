import { LoadIssues } from "../LoadIssues/LoadIssues";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <SearchBar />
      <LoadIssues />
    </header>
  );
};
