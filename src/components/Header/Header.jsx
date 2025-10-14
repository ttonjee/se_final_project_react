import React from "react";
import { Link, useLocation } from "react-router-dom";
import vectorIcon from "../../assets/vector-stroke.svg";
import menuIcon from "../../assets/menu.svg";
import logoutIcon from "../../assets/logout.svg";

function Header({ onSignInClick, user, onLogout }) {
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
          NewsExplorer
        </h1>
        <nav
          className={`header__nav${isSavedPage ? " header__nav--saved" : ""}`}
        >
          <span className="header__menu-icon">
            <img src={menuIcon} alt="menu" />
          </span>
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

          <button
            className={`header__button${
              isSavedPage ? " header__button--saved" : ""
            }`}
            onClick={user ? onLogout : onSignInClick}
          >
            {user ? (
              <>
                {user.name}
                <img
                  src={logoutIcon}
                  alt="logout"
                  style={{
                    marginLeft: "8px",
                    height: "20px",
                    verticalAlign: "middle",
                    filter: isSavedPage ? undefined : "brightness(0) invert(1)",
                  }}
                />
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
