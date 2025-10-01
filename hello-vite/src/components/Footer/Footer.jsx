import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          © 2024 NewsExplorer, Powered by NewsAPI
        </p>
        <div className="footer__links">
          <a href="/" className="footer__link">Home</a>
          <a href="https://newsapi.org" className="footer__link" target="_blank" rel="noopener noreferrer">
            NewsAPI
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;