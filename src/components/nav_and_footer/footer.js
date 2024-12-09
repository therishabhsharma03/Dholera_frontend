import React from 'react';
import './Footer.css'; // Make sure to create a CSS file for footer styles if needed

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3>Contact</h3>
              <address>
              Office No :- 342, Lodha Signet, Kolshet Road
          <br />
          Thane (W) , 
          Mumbai (MH)
              </address>
              <ul className="list-unstyled links">
                <li><a href="tel://919159155237">+91 91591-55237</a></li>
                <li>
                  {/* <a href="mailto:customercare@eminentrealty.com">customercare@eminentrealty.com</a> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget">
              <h3>Sources</h3>
              <ul className="list-unstyled float-start links">
                <li><a href="/policy">Privacy and Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget">
              <h3>Links</h3>
              <ul className="list-unstyled links">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About us</a></li>
                <li><a href="/contactus">Contact us</a></li>
                <li><a href="/blog">Blogs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            {/* 
              **==========
              NOTE: 
              Please don't remove this copyright link unless you buy the license here https://untree.co/license/  
              **==========
            */}
          </div>
        </div>
      </div>
      {/* Preloader */}
      <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
