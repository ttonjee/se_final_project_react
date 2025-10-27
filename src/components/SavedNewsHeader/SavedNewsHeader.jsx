import React, { useMemo } from "react";
import "./SavedNewsHeader.css";
import { Link } from "react-router-dom";
import vectorIcon from "../../assets/vector-stroke.svg";
import menuIcon from "../../assets/menu.svg";

function SavedNewsHeader({
  userName = "Elise",
  savedCount = 5,
  keywords = [],
  highlightWord = "",
}) {
  const query = (highlightWord || "").trim().toLowerCase();

  // memoize matching set to avoid re-computation on re-renders
  const highlighted = useMemo(() => {
    if (!query) return new Set();
    return new Set(
      keywords.filter((k) => (k || "").toLowerCase().includes(query))
    );
  }, [keywords, query]);

  return (
    <section className="saved-news-header">
      <nav className="saved-news-header__content">
        <div>
          <span className="header__menu-icon header__menu-icon-saved">
            <img src={menuIcon} alt="menu" />
          </span>

          <Link
            to="/"
            className="header__link-title header__link-title-saved"
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

          {/* logout moved to global Header; removed here to avoid duplicate */}
        </div>

        <h1 className="saved-news-header__title">Saved articles</h1>

        <p className="saved-news-header__subtitle">
          {userName}, you have {savedCount} saved{" "}
          {savedCount === 1 ? "article" : "articles"}
        </p>

        <div className="saved-news-header__keywords">
          <span className="saved-news-header__keywords-label">
            By keywords:
          </span>
          <div className="saved-news-header__keywords-list">
            {keywords.slice(0, 2).map((keyword, i) => (
              <span
                key={`${keyword}-${i}`}
                className={`saved-news-header__keyword ${
                  highlighted.has(keyword)
                    ? "saved-news-header__keyword-match"
                    : ""
                }`}
              >
                {keyword}
                {i === 0 && keywords.length > 1 ? ", " : ""}
              </span>
            ))}

            {keywords.length > 2 && (
              <span className="saved-news-header__keyword saved-news-header__keyword-faded">
                and {keywords.length - 2} other
              </span>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default SavedNewsHeader;
