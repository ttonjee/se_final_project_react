import React from "react";
import "./SavedNewsHeader.css";
import logoutIcon from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import vectorIcon from "../../assets/vector-stroke.svg";

function SavedNewsHeader({ userName = "Elise", savedCount = 5, onLogout }) {
  return (
    <section className="saved-news-header">
      <nav className="saved-news-header__content">
        <div className="saved-news-header__top">
          <Link
            to="/"
            className="header__link-title header__link-title--saved"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <img
              src={vectorIcon}
              alt=""
              aria-hidden="true"
              className="saved-news-header__vector"
              style={{ marginRight: 8, height: 16 }}
            />
            Home
          </Link>

          <button
            type="button"
            className="saved-news-header__logout"
            onClick={() => onLogout && onLogout()}
            aria-label="Log out"
            title="Log out"
          >
            <img src={logoutIcon} alt="Log out" />
          </button>
        </div>

        <h1 className="saved-news-header__title">Saved articles</h1>

        <p className="saved-news-header__subtitle">
          {userName}, you have {savedCount} saved {savedCount === 1 ? "article" : "articles"}
        </p>

        <div className="saved-news-header__keywords">
          <span className="saved-news-header__keywords-label">By keywords:</span>
          <div className="saved-news-header__keywords-list">
            <span className="saved-news-header__keyword">Nature</span>
            <span className="saved-news-header__keyword">Yellowstone</span>
            <span className="saved-news-header__keyword">and 2 others</span>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default SavedNewsHeader;
