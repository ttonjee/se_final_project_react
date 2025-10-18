import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import { searchNews } from "../../utils/newsApi";
import "./Main.css";

function Main({
  articles,
  setArticles,
  onSaveArticle,
  isArticleSaved,
  onRemoveArticle,
  isLoggedIn,
  onSearch,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleArticles, setVisibleArticles] = useState(3); // Show 3 initially per requirements
  // If no isLoggedIn prop is provided, default to false for demo purposes
  const effectiveLoggedIn = !!isLoggedIn;

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    setSearchQuery(query);
    setHasSearched(true);
    setVisibleArticles(3); // Reset to show 3 initially

    try {
      const response = await searchNews(query);
      setArticles(response.articles || []);
    } catch (err) {
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 3, articles.length)); // Show 3 more cards
  };

  const displayedArticles = articles.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < articles.length;

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
          <SearchForm onSearch={onSearch || handleSearch} />
        </div>
      </section>

      {/* Show search results section only when user is logged in or has searched */}
      {(effectiveLoggedIn || hasSearched) && (
        <section className="results-section">
          <div className="results-section__content">
            {/* Show preloader during search */}
            {hasSearched && isLoading && <Preloader />}

            {/* Show error message if request failed */}
            {hasSearched && !isLoading && error && (
              <div className="results-section__error">
                <p>
                  Sorry, something went wrong during the request. Please try
                  again later.
                </p>
              </div>
            )}

            {/* Show "Nothing Found" if no articles and no error */}
            {hasSearched && !isLoading && !error && articles.length === 0 && (
              <div className="results-section__not-found">
                <h3>Nothing found</h3>
                <p>Sorry, but nothing matched your search terms.</p>
              </div>
            )}

            {/* Show articles if we have them */}
            {hasSearched && !isLoading && !error && articles.length > 0 && (
              <>
                <h2 className="results-section__title">Search results</h2>
                <div className="main__cards-grid">
                  {displayedArticles.map((article, index) => (
                    <NewsCard
                      key={`${article.title}-${index}`}
                      article={article}
                      isSaved={isArticleSaved(article)}
                      onSave={onSaveArticle}
                      onRemove={onRemoveArticle}
                      showKeyword={true}
                      keyword={searchQuery}
                      isLoggedIn={effectiveLoggedIn}
                    />
                  ))}
                </div>
                {/* Show "Show more" button only if there are more articles */}
                {hasMoreArticles && (
                  <button
                    className="results-section__show-more"
                    onClick={handleShowMore}
                  >
                    Show more
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* About Component */}
      <About />

      {/* Footer moved out to page-level so it is not inside <main> */}
    </main>
  );
}

export default Main;
