import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ userName = "Elise", savedCount = 5 }) {
  return (
    <section className="saved-news-header">
      <div className="saved-news-header__content">
        <p className="saved-news-header__greeting">Saved articles</p>
        <h1 className="saved-news-header__title">
          {userName}, you have {savedCount} saved{" "}
          {savedCount === 1 ? "article" : "articles"}
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
      </div>
    </section>
  );
}

export default SavedNewsHeader;
