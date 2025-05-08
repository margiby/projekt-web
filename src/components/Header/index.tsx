import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import LanguageDropdown from "./LanguageDropdown";

const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Schließt Menü bei Klick außerhalb
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuActive && !(e.target as Element).closest(".navbar")) {
        setIsMenuActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuActive]);

  // Schließt Menü bei Klick auf einen Link
  // **TODO:** für Routing überarbeiten**
  const handleLinkClick = () => {
    setIsMenuActive(false);
  };

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <div className="navbar-logo"></div>
            <span className="navbar-title ml-2">
              <FormattedMessage id="app_title" defaultMessage="BEST APP" />
            </span>
          </a>

          {/* Burger Menu Button */}
          <a
            role="button"
            className={`navbar-burger ${isMenuActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded={isMenuActive}
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* Hauptmenü */}
        <div className={`navbar-menu ${isMenuActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <a className="navbar-item" href="#upload" onClick={handleLinkClick}>
              <FormattedMessage id="nav_upload" defaultMessage="Upload" />
            </a>
            <a className="navbar-item" href="#api" onClick={handleLinkClick}>
              <FormattedMessage id="nav_api" defaultMessage="API" />
            </a>
          </div>

          {/* Sprachauswahl */}
          <div className="navbar-end">
            <LanguageDropdown />
          </div>
        </div>
      </nav>

      {/* Abstandhalter */}
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Header;
