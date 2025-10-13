import React from "react";
import { Link } from "react-router-dom";
import vectorIcon from "../../assets/vector-stroke.svg";
import logoutIcon from "../../assets/logout.svg";
function Header({ onSignInClick, user }) {
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
          {user && (
            <Link to="/saved-news" className="header__link-title">
              Saved Articles
            </Link>
          )}
          <button className="header__button" onClick={onSignInClick}>
            {user ? (
              <>
                {user.name}
                <img src={logoutIcon} alt="Logout" className="header__logout-icon" style={{ marginLeft: 8, verticalAlign: 'middle', width: 20, height: 20 }} />
              </>
            ) : "Sign in"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
