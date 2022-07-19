import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div>
          <span className="footer-section-header">About</span>
          <ul className="footer-list">
            <li className="footer-list-item">Our Mission</li>
            <li className="footer-list-item">Our Process</li>
            <li className="footer-list-item">Submit a Star</li>
            <li className="footer-list-item">Careers</li>
          </ul>
        </div>
        <div>
          <span className="footer-section-header">Helpful Links</span>
          <ul className="footer-list">
            <li className="footer-list-item">Home</li>
            <li className="footer-list-item">Your STARs</li>
            <li className="footer-list-item">For Developers</li>
            <li className="footer-list-item">For Investors</li>
          </ul>
        </div>
        <form>
          <span>Be the first to hear about new STARs!</span>
          <div>
            <input type="text" placeholder="Enter an email address" />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
