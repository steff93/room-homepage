const Header = () => {
  const menuItems = ["home", "shop", "about", "contact"] as const;

  return (
    <header>
      <nav>
        <ul>
          {menuItems.map((item) => {
            return (
              <li>
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
