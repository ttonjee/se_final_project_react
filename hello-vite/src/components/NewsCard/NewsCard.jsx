import React from "react";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookmarkFilledIcon from "../../assets/icons/bookmark-filled.svg";
import "./NewsCard.css";

function NewsCard({
  article,
  isSaved = false,
  onSave = null,
  onRemove = null,
  showKeyword = false,
  keyword = "",
}) {
  if (!article) return null;

  const handleSaveClick = () => {
    if (isSaved && onRemove) {
      onRemove(article);
    } else if (!isSaved && onSave) {
      onSave(article);
    }
  };

  return (
    <article className="news-card">
      {article.urlToImage && (
        <img
          className="news-card__image"
          src={article.urlToImage}
          alt={article.title}
        />
      )}

      {/* Save/Remove button */}
      <button
        className={`news-card__save-button ${
          isSaved ? "news-card__save-button_active" : ""
        }`}
        onClick={handleSaveClick}
        aria-label={isSaved ? "Remove from saved" : "Save article"}
      >
        <img 
          src={isSaved ? BookmarkFilledIcon : BookmarkIcon} 
          alt={isSaved ? "Remove bookmark" : "Add bookmark"}
          className="news-card__bookmark-icon"
        />
      </button>

      <div className="news-card__content">
        {showKeyword && keyword && (
          <span className="news-card__keyword">{keyword}</span>
        )}
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <div className="news-card__footer">
          <span className="news-card__source">{article.source?.name}</span>
          {article.publishedAt && (
            <span className="news-card__date">
              {new Date(article.publishedAt).toLocaleDateString()}
            </span>
          )}
        </div>
        <a
          className="news-card__link"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </article>
  );
}

export default NewsCard;
