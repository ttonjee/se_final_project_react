import React from "react";
import "./ArticleCard.css";

const formatDate = (dateStr) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const ArticleCard = ({ article, isLoggedIn }) => (
  <div className="article-card">
    <img src={article.urlToImage} alt={article.title} />
    <div className="card-content">
      <p className="date">{formatDate(article.publishedAt)}</p>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span className="source">{article.source.name}</span>
    </div>
    <div className="save-icon">
      {isLoggedIn ? (
        <button>Save</button>
      ) : (
        <div className="tooltip-wrapper">
          <button className="inactive-save-icon" />
          <span className="tooltip">Sign in to save articles</span>
        </div>
      )}
    </div>
  </div>
);

export default ArticleCard;
