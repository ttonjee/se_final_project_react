import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import vectorIcon from "../../assets/vector-stroke.svg";

import "./Header.css";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">NewsExplore</h1>
        <nav className="header__nav">
          <Link to="/" className="header__link-title">
            Home
            <img
              src={vectorIcon}
              alt="vector icon"
              className="header__underline"
            />
          </Link>
          <button className="header__button" onClick={onSignInClick}>
            {" "}
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
