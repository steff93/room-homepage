import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
  const menuItems = ["home", "shop", "about", "contact"] as const;

  return (
    <header className="header">
      <div className="logo">
        <Logo />
      </div>
      <nav className="navigation">
        <ul>
          {menuItems.map((item) => {
            return (
              <li className="navigation__item">
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
