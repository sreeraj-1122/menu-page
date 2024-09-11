import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/Logo.png'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <h2>Connect with us</h2>
        <p>+1 470-788-8255</p>
      </div>
      <div className="footer-box center">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <h2>DEEP NET SOFT</h2>
      </div>
      <div className="footer-box">
        <h2>Find us</h2>
        <p>327 Memorial Dr SE, Atlanta, GA 30312, USA</p>
      </div>
      <div className="footer-bottom">
        <p>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
