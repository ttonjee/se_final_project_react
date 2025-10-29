import React, { useState } from "react";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookmarkFilledIcon from "../../assets/icons/bookmark-filled.svg";
import { formatPublicationDate } from "../../utils/dateUtils";
import "./NewsCard.css";
import TrashIcon from "../../assets/trash.svg";

function NewsCard({
  article,
  isSaved = false,
  onSave = null,
  onRemove = null,
  isLoggedIn = false,

  onSavedNewsRoute = false,
}) {
  const [showBookmarkTooltip, setShowBookmarkTooltip] = useState(false);
  const [showTrashTooltip, setShowTrashTooltip] = useState(false);

  if (!article) return null;

  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isLoggedIn) {
      return; // Do nothing if not logged in
    }

    if (isSaved && onRemove) {
      onRemove(article);
    } else if (!isSaved && onSave) {
      onSave(article);
    }
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onRemove) {
      onRemove(article);
    }
  };

  // Format the publication date
  const formattedDate = formatPublicationDate(article.publishedAt);

  return (
    <article className="news-card">
      {/* save/trash buttons moved outside the link to avoid nested interactive elements */}
      <div className="news-card__save-container">
        {!onSavedNewsRoute && (
          <>
            <button
              className={`news-card__save-button ${
                isSaved ? "news-card__save-button-active" : ""
              } ${!isLoggedIn ? "news-card__save-button-inactive" : ""}`}
              onClick={handleSaveClick}
              onMouseEnter={() => {
                if (!isLoggedIn) setShowBookmarkTooltip(true);
              }}
              onMouseLeave={() => setShowBookmarkTooltip(false)}
              aria-label={isSaved ? "Remove from saved" : "Save article"}
              aria-pressed={isSaved}
              title={isSaved ? "Delete saved article" : "Save article"}
            >
              <img
                src={isSaved ? BookmarkFilledIcon : BookmarkIcon}
                alt={isSaved ? "Remove bookmark" : "Add bookmark"}
                className="news-card__bookmark-icon"
              />
            </button>

            {/* Bookmark tooltip only when hovering bookmark button & not logged in */}
            {!isLoggedIn && showBookmarkTooltip && (
              <div className="news-card__tooltip">Sign in to save articles</div>
            )}
          </>
        )}

        {/* Trash icon with hover tooltip (only if saved) */}
        {onSavedNewsRoute && (
          <div
            className="news-card__trash-wrapper"
            onMouseEnter={() => setShowTrashTooltip(true)}
            onMouseLeave={() => setShowTrashTooltip(false)}
          >
            <button
              type="button"
              className="news-card__trash-button"
              onClick={handleRemoveClick}
              aria-label="Delete saved article"
            >
              <img
                src={TrashIcon}
                alt="trash icon"
                aria-hidden="true"
                className="news-card__trash-icon"
              />
            </button>
            {showTrashTooltip && (
              <div className="news-card__trash-tooltip">Remove from saved</div>
            )}
          </div>
        )}
      </div>

      <a
        className="news-card__link"
        href={article.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="news-card__image-wrapper">
          <img
            className="news-card__image"
            src={article.urlToImage}
            alt={article.title}
          />
        </div>

        <div className="news-card__content">
          {formattedDate && <p className="news-card__date">{formattedDate}</p>}

          <h3 className="news-card__title">{article.title}</h3>

          <p className="news-card__description">{article.description}</p>

          <p className="news-card__source">{article.source?.name}</p>
        </div>
      </a>
    </article>
  );
}

export default NewsCard;
