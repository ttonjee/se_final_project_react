import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import LoginModal from "../SignInModal/SignInModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Open Login Modal
  const handleSignInClick = () => {
    setIsLoginModalOpen(true);
  };

  // Close all modals
  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  // Switch between modals
  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  // Handle login logic
  const handleLogin = (loginData) => {
    console.log("Login Data:", loginData);
    handleCloseModal();
  };

  // Handle registration logic
  const handleRegister = (registerData) => {
    console.log("Register Data:", registerData);
    handleCloseModal();
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
      <Routes>
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
              user={null} // TODO: Pass actual user state here if available
            />
          }
        />
      </Routes>

      {/* Modals rendered outside Routes to be always available */}
      <LoginModal
        isOpen={isLoginModalOpen}
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
    </div>
  );
}

export default App;
