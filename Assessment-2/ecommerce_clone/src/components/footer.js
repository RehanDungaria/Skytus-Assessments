import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press Releases</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="#fb">Facebook</a></li>
            <li><a href="#tw">Twitter</a></li>
            <li><a href="#ig">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#sell">Sell on ShopZone</a></li>
            <li><a href="#affiliate">Become an Affiliate</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#account">Your Account</a></li>
            <li><a href="#help">Help & Support</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} SHOPZONE. Clone built for UI Demonstration.
      </div>
    </footer>
  );
};

export default Footer;