import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleSaveArticle = (article) => {
    setSavedArticles((prev) => {
      // Check if article is already saved
      const isAlreadySaved = prev.some((saved) => saved.url === article.url);
      if (isAlreadySaved) {
        return prev;
      }
      return [...prev, article];
    });
  };

  const handleRemoveArticle = (article) => {
    setSavedArticles((prev) =>
      prev.filter((saved) => saved.url !== article.url)
    );
  };

  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              articles={articles}
              setArticles={setArticles}
              onSaveArticle={handleSaveArticle}
              isArticleSaved={isArticleSaved}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNewsPage
              savedArticles={savedArticles}
              onRemoveArticle={handleRemoveArticle}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
