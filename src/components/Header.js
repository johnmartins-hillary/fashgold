import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <div class="logo" onClick={(e) => history.push("/")}>
        Fashgold
      </div>
      <form action="" class="search-container">
        <input type="text" class="search-input" placeholder="search" />
        <input type="button" value="search" class="search-btn" />
      </form>
      <ul class="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/">faq's</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link to="/LogIn">LogIn</Link>
        </li>
      </ul>
      <div class="toggle"></div>
    </div>
  );
}

export default Header;
