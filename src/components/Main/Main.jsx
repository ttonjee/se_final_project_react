import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import { searchNews } from "../../utils/newsApi";
import "./Main.css";

function Main({ articles, setArticles, onSaveArticle, isArticleSaved }) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleArticles, setVisibleArticles] = useState(3); // Show 3 initially per requirements

  // Temporary state to simulate login - replace with actual auth when implemented
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleSaveArticle = (article) => {
    onSaveArticle(article);
  };

  const handleShowMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 3, articles.length)); // Show 3 more cards
  };

  const displayedArticles = articles.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < articles.length;

  return (
    <main className="main">
      {/* Show home page and about section only when user is not logged in */}
      {!isLoggedIn && (
        <>
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

          {/* About Section */}
          <section className="about-section">
            <div className="about-section__content">
              <h2 className="about-section__title">About the author</h2>
              <div className="about-section__container">
                <div className="about-section__image-container">
                  <div className="about-section__image-placeholder">
                    <div className="about-section__smile">☺</div>
                    <p className="about-section__placeholder-text">
                      Placeholder image.
                      <br />
                      Put an image of yourself here.
                    </p>
                  </div>
                </div>
                <div className="about-section__text">
                  <p className="about-section__description">
                    This block describes the project author. Here you should
                    indicate your name, what you do, and which development
                    technologies you know.
                  </p>
                  <p className="about-section__description">
                    You can also talk about your experience with TripleTen, what
                    you learned there, and how you can help potential customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Show search results section only when user is logged in or has searched */}
      {(isLoggedIn || hasSearched) && (
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
                      isLoggedIn={isLoggedIn}
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

      {/* Footer only shows when user is logged in */}
      {isLoggedIn && <Footer />}
    </main>
  );
}

export default Main;
