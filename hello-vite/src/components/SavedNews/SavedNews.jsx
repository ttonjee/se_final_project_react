import React, { useState } from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedArticlesList from "../SavedArticlesList/SavedArticlesList";
import "./SavedNews.css";

function SavedNews() {
  // Mock data for demonstration
  const [savedArticles, setSavedArticles] = useState([
    {
      title: "Scientists Discover New Species in Yellowstone National Park",
      description:
        "A team of researchers has identified a previously unknown species of butterfly in the remote areas of Yellowstone, adding to the park's rich biodiversity.",
      source: { name: "Nature Today" },
      publishedAt: "2024-03-15T10:30:00Z",
      urlToImage:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      url: "https://example.com/news/1",
      keyword: "Nature",
    },
    {
      title: "Climate Change Effects on National Parks Documented",
      description:
        "New research shows significant changes in wildlife patterns and vegetation across America's national parks due to climate change.",
      source: { name: "Environmental Weekly" },
      publishedAt: "2024-03-14T14:22:00Z",
      urlToImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      url: "https://example.com/news/2",
      keyword: "Yellowstone",
    },
  ]);

  const handleRemoveArticle = (articleToRemove) => {
    setSavedArticles((prev) =>
      prev.filter((article) => article.url !== articleToRemove.url)
    );
  };

  return (
    <main className="saved-news">
      <SavedNewsHeader userName="Elise" savedCount={savedArticles.length} />
      <SavedArticlesList
        articles={savedArticles}
        onRemoveArticle={handleRemoveArticle}
      />
    </main>
  );
}

export default SavedNews;
