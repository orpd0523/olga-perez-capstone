import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">Logo Here, Maybe?</div>
        <ul className="header__menu">
          <li className="header__item">Home</li>
          <li className="header__item">Avatar</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
