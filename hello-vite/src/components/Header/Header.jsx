import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__title-link">
          <h1 className="header__title">NewsExplorer</h1>
        </Link>
        <Navigation onSignInClick={onSignInClick} />
      </div>
    </header>
  );
}

export default Header;
