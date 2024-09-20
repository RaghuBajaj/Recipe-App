import "./Navbar.css";
import logo from "../Recipe-icons/logo.png";
import { useContext } from "react";
import { pagesContext } from "../context/context";

function Navbar() {
  const value = useContext(pagesContext);
  return (
    <div className="nav-bar">
      <div className="heading">
        <img src={logo} className="logo" alt=""></img>
        <h3 className="title">Recipe App</h3>
      </div>
      <ul className="ul">
        <li
          className="li"
          onClick={() => {
            value.setPages("home");
          }}
        >
          Welcome !
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
