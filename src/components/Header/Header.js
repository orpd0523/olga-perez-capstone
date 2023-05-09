import "./Header.scss";
import useModalStore from "../../stores/modalStore";
import { Link } from "react-router-dom";
import { GiFallingLeaf } from 'react-icons/gi';

function Header() {
  const { toggle } = useModalStore();
  return (
    <header className="header">
      <nav className="header__nav">
        <span className="header__logo-container">
          <Link to="/home" >
            <h1 className="header__logo" ><GiFallingLeaf size={50} className="header__leaf" /></h1>
          </Link>
        </span>
        <ul className="header__menu">
          {/* <Link to="/home">
          <li className="header__item">Home</li>
          </Link> */}
          <Link to="/" >{/*Might need to change*/}
            <li className="header__item" >To Do</li>
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
