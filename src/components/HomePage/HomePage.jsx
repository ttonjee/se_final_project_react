import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function HomePage({ articles, setArticles, onSaveArticle, isArticleSaved }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSignInClick = () => {
    console.log("Sign In clicked");
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const handleLogin = (loginData) => {
    console.log("Login data:", loginData);
    // TODO: Implement actual login logic
    handleCloseModal();
  };

  const handleRegister = (registerData) => {
    console.log("Register data:", registerData);
    // TODO: Implement actual register logic
    handleCloseModal();
  };

  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <div>
      <Header onSignInClick={handleSignInClick} />
      <Main
        articles={articles}
        setArticles={setArticles}
        onSaveArticle={onSaveArticle}
        isArticleSaved={isArticleSaved}
      />
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

export default HomePage;
