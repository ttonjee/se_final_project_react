import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedArticlesList.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedArticlesList({
  articles = [],
  onRemoveArticle,
  isLoading = false,
}) {
  if (isLoading) {
    return (
      <section className="saved-articles-list">
        <div className="saved-articles-list__content">
          <div className="saved-articles-list__loading">
            <div className="saved-articles-list__spinner"></div>
            <p>Loading your saved articles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="saved-articles-list">
        <div className="saved-articles-list__content">
          <div className="saved-articles-list__empty">
            <h3>No saved articles yet</h3>
            <p>Start saving articles from the main page to see them here!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="saved-articles-list">
      <div className="saved-articles-list__content">
        <div className="saved-articles-list__grid">
          {articles.map((article, index) => (
            <NewsCard
              key={`${article.url}-${index}`}
              article={article}
              isSaved={true}
              onRemove={onRemoveArticle}
              showKeyword={true}
              keyword={article.keyword || "General"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SavedArticlesList;
