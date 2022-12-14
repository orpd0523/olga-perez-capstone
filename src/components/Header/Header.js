import "./Header.scss";
import useModalStore from "../../stores/modalStore";

function Header() {
  const { toggle } = useModalStore();
  return (
    <header className="header">
      <nav className="header__nav">
        <span className="header__logo-container">
          <h1 className="header__logo">To Do Today: </h1>
          <h2 className="header__logo-2">Stay Alive</h2>
        </span>
        <ul className="header__menu">
          <li className="header__item">Home</li>
          <li className="header__item" onClick={toggle}>
            Avatar
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
