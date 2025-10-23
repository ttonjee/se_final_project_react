import React from "react";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/icons/Linkedin.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">© 2024 Supersite, Powered by News API</p>

        <nav className="footer__links" aria-label="Footer navigation">
          <div className="footer__link-group">
            <a href="/" className="footer__link">
              Home
            </a>
            <a
              href="https://tripleten.com"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </div>

          <div className="footer__icons">
            <a
              href="https://github.com"
              className="footer__link footer__link--github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="footer__github-icon"
              />
            </a>
            <a
              href="https://linkedin.com"
              className="footer__link footer__link--linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="footer__linkedin-icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
