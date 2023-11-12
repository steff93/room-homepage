/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./Header.scss";

const Header = () => {
  const menuItems = ["home", "shop", "about", "contact"] as const;

  return (
    <header className="header">
      <a className="logo" href="#">
        <Logo />
      </a>
      <nav className="navigation">
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li className="navigation__item" key={index}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
