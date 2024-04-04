import { UIButton } from "../UI/Button";
import { UISearchInput } from "../UI/UISearchInput";
import './Header.scss';

export const Header = () => {

  const onButtonClick = () => {
    console.log('Clicked')
  }

  return (
    <header className="header">
      <UISearchInput placeholder="Enter repo URL" loading />
      <UIButton onClick={onButtonClick}>Load issues</UIButton>
    </header>
  );
};