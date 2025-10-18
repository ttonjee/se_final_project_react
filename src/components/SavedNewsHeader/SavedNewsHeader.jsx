import React from "react";
import "./SavedNewsHeader.css";

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

        <h1 className="saved-news-header__title">Saved articles</h1>
        <p className="saved-news-header__subtitle">
          {userName}, you have {savedCount} saved {savedCount === 1 ? "article" : "articles"}
        </p>
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
