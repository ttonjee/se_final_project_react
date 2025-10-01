import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onSignInClick }) {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "navigation__home navigation__home_active"
            : "navigation__home"
        }
      >
        Home
      </NavLink>
      <button className="navigation__signin-button" onClick={onSignInClick}>
        Sign in
      </button>
    </nav>
  );
}

export default Navigation;
