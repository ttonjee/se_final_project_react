import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import RegisterModal from "../RegisterModal/RegisterModal";
import Footer from "../Footer/Footer";
import "./App.css";
import SignInModal from "../SignInModal/SignInModal";
import Preloader from "../Preloader/Preloader";

function App() {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  // derive logged-in boolean from the canonical `user` state
  const isLoggedIn = !!user;

  useEffect(() => {
    try {
      const raw = localStorage.getItem("demo_user");
      if (raw) setUser(JSON.parse(raw));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("Failed to read demo user from localStorage:", err);
    }
  }, []);

  useEffect(() => {
    try {
      if (user) {
        // persist only safe demo fields (avoid storing secrets)
        const safe = { name: user.name, email: user.email };
        localStorage.setItem("demo_user", JSON.stringify(safe));
      } else {
        localStorage.removeItem("demo_user");
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("Failed to persist demo user to localStorage:", err);
    }
  }, [user]);

  // ...existing code...

  // Open Sign In Modal
  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };

  // Close all modals
  const handleCloseModal = () => {
    setIsSignInModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  // Switch between modals
  const handleSwitchToRegister = () => {
    setIsSignInModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(true);
  };

  // Handle login logic
  const handleLogin = (loginData) => {
    console.log("Login Data:", loginData);
    setUser({ name: loginData.email.split("@")[0], email: loginData.email });
    handleCloseModal();
  };

  // Handle registration logic
  const handleRegister = (registerData) => {
    console.log("Register Data:", registerData);
    handleCloseModal();
  };

  // Handle logout logic
  const handleLogout = () => {
    console.log("handleLogout called");
    setUser(null);
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError("Please enter a keyword");
      setArticles([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchNewsArticles(query);
      if (data.articles.length === 0) {
        setError("Nothing Found");
        setArticles([]);
      } else {
        setArticles(data.articles);
        setVisibleArticles(3);
      }
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
    setSavedArticles((prev) => {
      const isAlreadySaved = prev.some((saved) => saved.url === article.url);
      return isAlreadySaved ? prev : [...prev, article];
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
      <div className="app__content">
        {/* Global preloader shown while App-level searches are running */}
        {isLoading && <Preloader />}
        {/* Global error banner (uses `error` state) */}
        {error && (
          <div className="app__error" role="alert" aria-live="assertive">
            <span className="app__error-message">{error}</span>
            <button
              type="button"
              className="app__error-dismiss"
              onClick={() => setError(null)}
              aria-label="Dismiss error"
            >
              ×
            </button>
          </div>
        )}
        <Routes>
          {/* DEBUG: Current route will render below. If you only see Saved Articles, check your browser address bar. */}
          <Route
            path="/"
            element={
              <HomePage
                articles={articles}
                setArticles={setArticles}
                onSaveArticle={handleSaveArticle}
                isArticleSaved={isArticleSaved}
                onRemoveArticle={handleRemoveArticle}
                onSignInClick={handleSignInClick}
                user={user}
                isLoggedIn={isLoggedIn}
                setUser={setUser}
                onLogout={handleLogout}
                handleSearch={handleSearch}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedNewsPage
                savedArticles={savedArticles}
                onRemoveArticle={handleRemoveArticle}
                onSignInClick={handleSignInClick}
                user={user}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
              />
            }
          />
        </Routes>
      </div>

      {/* Modals rendered outside Routes to be always available */}
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={handleCloseModal}
        onLogin={handleLogin}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleCloseModal}
        onRegister={handleRegister}
        onSwitchToLogin={handleSwitchToLogin}
      />
      <Footer />
    </div>
  );
}

export default App;
