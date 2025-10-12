import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SignInModal from "../SignInModal/SignInModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function HomePage({ articles, setArticles, onSaveArticle, isArticleSaved }) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSignInClick = () => {
    console.log("Sign in button clicked");
    setIsSignInModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignInModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const handleSignIn = (loginData) => {
    console.log("Sign in data:", loginData);
    handleCloseModal();
  };

  const handleRegister = (registerData) => {
    console.log("Register data:", registerData);
    handleCloseModal();
  };

  const handleSwitchToRegister = () => {
    setIsSignInModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(true);
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
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={handleCloseModal}
        onSignIn={handleSignIn}
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
