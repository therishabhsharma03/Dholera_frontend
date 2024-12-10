import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Contact Section */}
          <div className="footer-column">
            <h3>Contact</h3>
            <address>
              Office No: 342, Lodha Signet, Kolshet Road
              <br />
              Thane (W), Mumbai (MH)
            </address>
            <ul className="footer-links">
              <li><a href="tel:+919159155237">+91 91591-55237</a></li>
            </ul>
          </div>

          {/* Sources Section */}
          <div className="footer-column">
            <h3>Sources</h3>
            <ul className="footer-links">
              <li><a href="/policy">Privacy and Policy</a></li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="footer-column">
            <h3>Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              <li><a href="/blog">Blogs</a></li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="footer-column">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" className="social-icon facebook" target="_blank" rel="noreferrer">
                {/* <i className="fab fa-facebook-f"></i> Facebook */}
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>
              </a>
              <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noreferrer">
                {/* <i className="fab fa-instagram"></i> Instagram */}
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
              </a>
              <a href="https://youtube.com" className="social-icon youtube" target="_blank" rel="noreferrer">
                {/* <i className="fab fa-youtube"></i> YouTube */}
                <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/youtube-logo.png" alt="youtube-logo"/>
              </a>
              <a href="mailto:contact@yourcompany.com" className="social-icon email">
                {/* <i className="fas fa-envelope"></i> Email */}
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/email-open.png" alt="email-open"/>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>

      {/* Preloader */}
      <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;