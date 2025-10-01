import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import { searchNews } from "../../utils/newsApi";
import "./Main.css";

function Main() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    setSearchQuery(query);
    setHasSearched(true);

    try {
      const response = await searchNews(query);
      setArticles(response.articles || []);
    } catch (err) {
      setError(err.message);
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveArticle = (article) => {
    // TODO: Implement save functionality
    console.log("Saving article:", article);
  };

  return (
    <main className="main">
      <section className="search-section">
        <div className="search-section__content">
          <h1 className="search-section__title">
            What's going on in
            <br />
            the world?
          </h1>
          <p className="search-section__subtitle">
            Find the latest news on any topic and save them in your personal
            account
          </p>
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>

      <section className="results-section">
        <div className="results-section__content">
          {!hasSearched && (
            <p>Enter a search term to find news articles</p>
          )}
          
          {isLoading && <Preloader />}
          
          {error && (
            <div className="results-section__error">
              <p>Something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</p>
            </div>
          )}
          
          {hasSearched && !isLoading && !error && articles.length === 0 && (
            <div className="results-section__not-found">
              <p>Sorry, but nothing matched your search terms.</p>
            </div>
          )}
          
          {articles.length > 0 && (
            <>
              <h2 className="results-section__title">Search results</h2>
              <div className="results-section__cards">
                {articles.map((article, index) => (
                  <NewsCard
                    key={`${article.url}-${index}`}
                    article={article}
                    onSave={handleSaveArticle}
                    isSaved={false}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Main;
