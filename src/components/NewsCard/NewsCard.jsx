import React, { useState } from "react";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookmarkFilledIcon from "../../assets/icons/bookmark-filled.svg";
import { formatPublicationDate } from "../../utils/dateUtils";
import "./NewsCard.css";

function NewsCard({
  article,
  isSaved = false,
  onSave = null,
  onRemove = null,
  showKeyword = false,
  keyword = "",
  isLoggedIn = false, // Add prop to track login status
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!article) return null;

  const handleSaveClick = () => {
    if (!isLoggedIn) {
      return; // Do nothing if user is not logged in
    }

    if (isSaved && onRemove) {
      onRemove(article);
    } else if (!isSaved && onSave) {
      onSave(article);
    }
  };

  const handleMouseEnter = () => {
    if (!isLoggedIn) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  // Format the publication date
  const formattedDate = formatPublicationDate(article.publishedAt);

  return (
    <article className="news-card">
      {article.urlToImage && (
        <img
          className="news-card__image"
          src={article.urlToImage}
          alt={article.title}
        />
      )}

      {/* Save/Remove button with tooltip */}
      <div className="news-card__save-container">
        <button
          className={`news-card__save-button ${
            isSaved ? "news-card__save-button_active" : ""
          } ${!isLoggedIn ? "news-card__save-button_inactive" : ""}`}
          onClick={handleSaveClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label={isSaved ? "Remove from saved" : "Save article"}
        >
          <img 
            src={isSaved ? BookmarkFilledIcon : BookmarkIcon} 
            alt={isSaved ? "Remove bookmark" : "Add bookmark"}
            className="news-card__bookmark-icon"
          />
        </button>
        {showTooltip && (
          <div className="news-card__tooltip">
            Sign in to save articles
          </div>
        )}
      </div>

      <div className="news-card__content">
        {showKeyword && keyword && (
          <span className="news-card__keyword">{keyword}</span>
        )}
        
        {/* Publication date */}
        {formattedDate && (
          <p className="news-card__date">{formattedDate}</p>
        )}
        
        {/* Publication title */}
        <h3 className="news-card__title">{article.title}</h3>
        
        {/* Publication description */}
        <p className="news-card__description">{article.description}</p>
        
        {/* Source name */}
        <p className="news-card__source">{article.source?.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
