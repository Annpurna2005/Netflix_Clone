import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="200" height="200" className="logo">
          <rect width="1024" height="1024" fill="black"/>
          <path fill="#E50914" d="M360 128l122 768h86L446 128h-86zm302 0L540 896h86l122-768h-86z"/>
          <path fill="#B20710" d="M446 128l122 768l86-256L540 128h-94z"/>
        </svg>
        <div className="header-options">
        <select className="language-select">
  <option value="en">English</option>
  <option value="hi">हिन्दी</option>
</select>
          <button className="sign-in-button">Sign in</button>
        </div>
      </div>

      <div className="main-content">
        <div className="text-container"> 
          <h1 className="main-title">Unlimited movies,</h1>
          <h1>TV shows and more</h1>
          <h4 className="sub-title">Starts at ₹149. Cancel at any time.</h4>
          <h6 className="description">Ready to watch? Enter your email to create or restart your membership.</h6>
        </div>
        <div className="input-container">
          <input type="text" className="email-input" placeholder="Enter your email" />
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
