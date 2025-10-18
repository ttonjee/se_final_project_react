import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedArticlesList.css";

function SavedArticlesList({
  articles = [],
  onRemoveArticle,
  isLoading = false,
}) {
  if (isLoading) {
    return (
      <section className="saved-articles-list">
        <div className="saved-articles-list__content">
          <article className="saved-articles-list__loading" aria-live="polite">
            <div className="saved-articles-list__spinner" role="status" aria-hidden="true"></div>
            <p>Loading your saved articles...</p>
          </article>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="saved-articles-list">
        <div className="saved-articles-list__content">
          <article className="saved-articles-list__empty">
            <h3>No saved articles yet</h3>
            <p>Start saving articles from the main page to see them here!</p>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="saved-articles-list">
      <div className="saved-articles-list__content">
        <ul className="saved-articles-list__grid" aria-live="polite">
          {articles.map((article, index) => (
            <li className="saved-articles-list__item" key={`${article.url}-${index}`}>
              <NewsCard
                article={article}
                isSaved={true}
                onRemove={onRemoveArticle}
                showKeyword={true}
                keyword={article.keyword || "General"}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SavedArticlesList;
