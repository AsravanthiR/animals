import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Animals app</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <h2>Home</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/About">
              <h2>About</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/animals">
              <h2>Animals</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
