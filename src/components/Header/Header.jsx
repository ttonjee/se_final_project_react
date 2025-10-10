import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import headerLogoutIcon from "../../assets/icons/header-logout.svg";
import "./Header.css";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <img src={headerLogoutIcon} alt="Header Logout" className="header__image" />
    </header>
  );
}

export default Header;
