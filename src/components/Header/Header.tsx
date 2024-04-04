import { UIButton } from "../UI/Button";
import { UISearchInput } from "../UI/UISearchInput";
import "./Header.scss";

export const Header = () => {
  const onButtonClick = () => {
    console.log("Clicked");
  };

  const handleChange = () => {
    console.log("Changed");
  };

  return (
    <header className="header">
      <UISearchInput
        placeholder="Enter repo URL"
        loading
        onChange={handleChange}
        value={"value"}
      />
      <UIButton onClick={onButtonClick}>Load issues</UIButton>
    </header>
  );
};
