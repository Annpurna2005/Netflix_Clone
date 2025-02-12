import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      {/* Email Input and Button */}
      <div className="footer-mail">
        <input type="text" placeholder="Enter email" />
        <button>Get Started</button>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <p>Questions? Call 000-800-919-1743</p>
          <a href="#faq">FAQ</a>
          <a href="#help-centre">Help Centre</a>
          <a href="#account">Account</a>
          <a href="#media-centre">Media Centre</a>
        </div>
        
        <div className="footer-column">
          <a href="#investor-relations">Investor Relations</a>
          <a href="#jobs">Jobs</a>
          <a href="#ways-to-watch">Ways to Watch</a>
          <a href="#terms-of-use">Terms of Use</a>
        </div>
        
        <div className="footer-column">
          <a href="#privacy">Privacy</a>
          <a href="#cookie-preferences">Cookie Preferences</a>
          <a href="#corporate-info">Corporate Information</a>
          <a href="#contact-us">Contact Us</a>
        </div>
        
        <div className="footer-column">
          <a href="#speed-test">Speed Test</a>
          <a href="#legal-notices">Legal Notices</a>
        </div>
      </div>

      {/* Language Select and Branding */}
      <div className="footer-bottom">
        <select className="language-select">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
        <p>Only on Netflix</p>
      </div>
    </div>
  );
};

export default Footer;
