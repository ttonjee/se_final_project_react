import React, { useState } from "react";
import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";
import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";

function SavedNewsPage({
  savedArticles = [],
  onRemoveArticle,
  user,
  onLogout,
}) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignInModalOpen(false);
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
    setIsSignInModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(true);
  };

  return (
    <div className="page">
      <Header
        onSignInClick={handleSignInClick}
        user={user}
        onLogout={onLogout}
        showUsernameOnly={true}
        style={{ backgroundColor: "#fff", color: "#000" }}
      />
      <SavedNews
        savedArticles={savedArticles}
        onRemoveArticle={onRemoveArticle}
        user={user}
      />
      
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={handleCloseModal}
        onSignIn={handleLogin}
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
