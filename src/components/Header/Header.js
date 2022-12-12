import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <h2 className="header__logo">To Do Today: Stay Alive</h2>
        <ul className="header__menu">
          <li className="header__item">Home</li>
          <li className="header__item">Avatar</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
