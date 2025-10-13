import React, { useState } from "react";
import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../SignInModal/SignInModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function SavedNewsPage({ savedArticles = [], onRemoveArticle, user }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSignInClick = () => {
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
  <Header onSignInClick={handleSignInClick} user={user} />
      <SavedNews
        savedArticles={savedArticles}
        onRemoveArticle={onRemoveArticle}
        user={user}
      />
      <Footer />
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

export default SavedNewsPage;
