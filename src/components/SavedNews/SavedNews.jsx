import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedArticlesList from "../SavedArticlesList/SavedArticlesList";
import "./SavedNews.css";

function SavedNews({ savedArticles = [], onRemoveArticle, user }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader userName={user?.name || "Guest"} savedCount={savedArticles.length} />
      <SavedArticlesList
        articles={savedArticles}
        onRemoveArticle={onRemoveArticle}
      />
    </main>
  );
}

export default SavedNews;
