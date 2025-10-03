import React, { useState } from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedArticlesList from "../SavedArticlesList/SavedArticlesList";
import "./SavedNews.css";

function SavedNews({ savedArticles = [], onRemoveArticle }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader userName="Elise" savedCount={savedArticles.length} />
      <SavedArticlesList
        articles={savedArticles}
        onRemoveArticle={onRemoveArticle}
      />
    </main>
  );
}

export default SavedNews;
