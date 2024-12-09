import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../../views/home.css';
import "../../i18n";
import "./nav.css";

const isUserLoggedIn = !!localStorage.getItem("user");

const Nav = () => {
  const { t } = useTranslation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    setMobileDropdownVisible(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
    setMobileDropdownVisible(false);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownVisible(!mobileDropdownVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <header data-thq="thq-navbar" className={`navbarContainer home-navbar-interactive ${sticky ? 'sticky' : ''}`}>
        <a href="/"> 
         <img src="images/logo.png" alt="Logo" className="logo" />
        </a> 
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <Link className={`bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} to="/">
                {t("home")}
              </Link>
              <Link className={`home-nav42 bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} to="/aboutus">
                {t("about")}
              </Link>
              <div className={`dropdown bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Projects
                {dropdownVisible && (
                  <div className="dropdown-menu">
                    <Link to="/dholera" className="dropdown-item bodySmall">Dholera Ivestments</Link>
                    <Link to="/mumbai" className="dropdown-item bodySmall">Dholera Homes</Link>
                    <Link to="/mumbai" className="dropdown-item bodySmall">Connectivity</Link>
                  </div>
                )}
              </div>
              <Link className={`home-nav42 bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} to="/blog">
                Blogs
              </Link>
              <Link className={`home-nav42 bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} to="/contactus">
                Contact Us
              </Link>

            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu" onClick={toggleMobileMenu}>
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          {mobileMenuVisible && (
            <div data-thq="thq-mobile-menu" className="home-mobile-menu1 mobileMenu">
              <div className="home-nav">
                <div className="home-top">
                  <div data-thq="thq-close-menu" className="home-close-menu" onClick={closeMobileMenu}>
                    <svg viewBox="0 0 1024 1024" className="home-icon02 socialIcons">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <Link className={`bodySmall home-nav42 buttonFilled_nav ${sticky ? 'sticky' : ''}`} to="/" onClick={closeMobileMenu}>
                    {t("home")}
                  </Link>
                  <Link className={`bodySmall home-nav42 buttonFilled_nav ${sticky ? 'sticky' : ''}`} to="/aboutus" onClick={closeMobileMenu}>
                    {t("about")}
                  </Link>
                  <div className="dropdown">
                    <span className={`dropdown bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} onClick={toggleMobileDropdown}>
                      Projects
                    </span>
                    {mobileDropdownVisible && (
                      <div className="dropdown-menu">
                        <Link to="/dholera" className={`home-nav42 bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} onClick={closeMobileMenu}>Dholera</Link>
                        <Link to="/mumbai" className={`home-nav42 bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} onClick={closeMobileMenu}>Mumbai</Link>
                      </div>
                    )}
                  </div>
                  <Link className={`home-nav42 bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} to="/blog" onClick={closeMobileMenu}>
                    Blogs
                  </Link>
                  <Link className={`home-nav42 bodySmall buttonFilled_nav ${sticky ? 'sticky' : ''}`} to="/contactus" onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Nav;
