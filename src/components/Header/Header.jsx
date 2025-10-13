import React from "react";
import { Link, useLocation } from "react-router-dom";
import vectorIcon from "../../assets/vector-stroke.svg";

function Header({ onSignInClick, user, showUsernameOnly }) {
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";

  return (
    <header className="header">
      <div
        className={`header__container ${
          isSavedPage ? "header__container--saved" : ""
        }`}
      >
        <h1
          className={`header__title${
            isSavedPage ? " header__title--saved" : ""
          }`}
        >
          NewsExplore
        </h1>
        <nav
          className={`header__nav${isSavedPage ? " header__nav--saved" : ""}`}
        >
          <Link
            to="/"
            className={`header__link-title${
              isSavedPage ? " header__link-title--saved" : ""
            }`}
          >
            Home
            <img
              src={vectorIcon}
              alt="vector icon"
              className="header__underline"
            />
          </Link>
          {user && (
            <Link
              to="/saved-news"
              className={`header__link-title${
                isSavedPage ? " header__link-title--saved" : ""
              }`}
            >
              Saved Articles
            </Link>
          )}
          {showUsernameOnly && user ? (
            <span
              className={`header__button${
                isSavedPage ? " header__button--saved" : ""
              }`}
            >
              {user.name}
            </span>
          ) : (
            <button
              className={`header__button${
                isSavedPage ? " header__button--saved" : ""
              }`}
              onClick={onSignInClick}
            >
              {user ? user.name : "Sign in"}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
