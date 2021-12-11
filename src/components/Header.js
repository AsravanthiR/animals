import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Animals app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <h2>About</h2>
            </Link>
          </li>
          <li>
            <Link to="/animals">
              <h2>Animals</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
