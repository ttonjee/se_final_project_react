import React from "react";
import "./SavedNewsHeader.css";
import logoutIcon from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import vectorIcon from "../../assets/vector-stroke.svg";

function SavedNewsHeader({ userName = "Elise", savedCount = 5 }) {
  return (
    <section className="saved-news-header">
      <nav className="saved-news-header__content">
        <Link
          to="/"
          className="header__link-title header__link-title--saved"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          Home
        </Link>
        <p className="saved-news-header__greeting">Saved articles</p>
        <h1 className="saved-news-header__title">
          {userName}, you have {savedCount} saved{" "}
          {savedCount === 1 ? "article" : "articles"}
          <img
            src={logoutIcon}
            alt="logout"
            className="saved-news-header__logout-icon"
            style={{
              marginLeft: "12px",
              verticalAlign: "middle",
              height: "24px",
            }}
          />
        </h1>
        <div className="saved-news-header__keywords">
          <span className="saved-news-header__keywords-label">
            By keywords:
          </span>
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
