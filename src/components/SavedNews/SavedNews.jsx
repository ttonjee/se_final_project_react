import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedArticlesList from "../SavedArticlesList/SavedArticlesList";
import "./SavedNews.css";

function SavedNews({ savedArticles = [], onRemoveArticle, user, highlightWord = "" }) {
  // Derive a simple keyword list from saved articles (use source names or tags if present)
  const keywords = [];
  savedArticles.forEach((a) => {
    if (a.keywords && Array.isArray(a.keywords)) {
      a.keywords.forEach((k) => keywords.push(k));
    }
  });

  // Fallback: if no article-level keywords, use top sources as keywords
  if (keywords.length === 0) {
    const counts = {};
    savedArticles.forEach((a) => {
      const name = a.source?.name || "Unknown";
      counts[name] = (counts[name] || 0) + 1;
    });
    const top = Object.keys(counts).slice(0, 5);
    top.forEach((t) => keywords.push(t));
  }

  return (
    <main className="saved-news">
      <SavedNewsHeader
        userName={user?.name || "Guest"}
        savedCount={savedArticles.length}
        keywords={keywords}
        highlightWord={highlightWord}
      />
      <SavedArticlesList
        articles={savedArticles}
        onRemoveArticle={onRemoveArticle}
      />
    </main>
  );
}

export default SavedNews;
