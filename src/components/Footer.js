import React from "react";
import "../sytles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter to receive exclusive offers and updates.</p>
          <form>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="Enter your email" />
            <div className="checkbox-container">
              <input type="checkbox" id="subscribe" />
              <label htmlFor="subscribe">Yes, subscribe me to your newsletter.</label>
            </div>
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Address Section */}
        <div className="footer-section address">
          <h3>Visit Us</h3>
          <p>
            500 Terry Francine St.<br />
            San Francisco, CA 94158
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            info@mercadosantjoan.com<br />
            +1 123-456-7890
          </p>
        </div>

        {/* Follow Section */}
        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
          <ul className="policy-links">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Accessibility Statement</a></li>
          </ul>
        </div>
      </div>

      {/* Brand Section */}
      <div className="footer-brand">
        <h1>Mercado Sant Joan</h1>
      </div>
    </footer>
  );
};

export default Footer;
