import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import vectorIcon from "../../assets/vector-stroke.svg";
import menuIcon from "../../assets/menu.svg";
import logoutIcon from "../../assets/logout.svg";

function Header({ onSignInClick, user, onLogout }) {
  console.log("Header mounted. onLogout:", onLogout);
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
          <span
            className={`header__menu-icon${
              isSavedPage ? " header__menu-icon--saved" : ""
            }`}
          >
            <img src={menuIcon} alt="menu" />
          </span>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__link-title${
                isSavedPage ? " header__link-title--saved" : ""
              }${isActive ? " header__link-title--active" : ""}`
            }
          >
            Home
            <img
              src={vectorIcon}
              alt="vector icon"
              className="header__underline"
            />
          </NavLink>
          {user && (
            <NavLink
              to="/saved-news"
              className={({ isActive }) =>
                `header__link-title${
                  isSavedPage ? " header__link-title--saved" : ""
                }${isActive ? " header__link-title--active" : ""}`
              }
            >
              Saved Articles
              <img
                src={vectorIcon}
                alt="vector icon"
                className="header__underline"
              />
            </NavLink>
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
                  onClick={() => {
                    console.log("Logout icon clicked");
                    if (onLogout) onLogout();
                  }}
                  style={{
                    top: "15px",
                    right: "19px",
                    height: "16px",
                    position: "absolute",
                    cursor: "pointer", // <-- makes it look clickable
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
