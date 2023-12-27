/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { ReactComponent as IconClose } from "../../assets/images/icon-close.svg";
import { ReactComponent as MobileHamburger } from "../../assets/images/icon-hamburger.svg";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./Header.scss";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuItems = ["home", "shop", "about", "contact"] as const;

  const toggleMobileNavigation = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const mobileNavigation = (
    <nav className="navigation__mobile">
      <IconClose onClick={toggleMobileNavigation} />
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
  );

  return (
    <header className="header">
      <MobileHamburger
        className="mobile-menu"
        onClick={toggleMobileNavigation}
      />
      <a className="logo" href="#">
        <Logo />
      </a>
      {showMobileMenu && mobileNavigation}
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
