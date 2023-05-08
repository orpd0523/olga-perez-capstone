import "./Header.scss";
import useModalStore from "../../stores/modalStore";
import { Link } from "react-router-dom";

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
        {/* <Link to="/home">
          <li className="header__item">Home</li>
          </Link> */}
        <Link to="/">{/*Might need to change*/}
          <li className="header__item">To Do</li>
          </Link>
          <li className="header__item" onClick={toggle}>
            Avatar
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
