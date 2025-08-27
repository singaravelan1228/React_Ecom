import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h4>About Us</h4>
          <p>
            We provide the best shopping experience with top-quality products. We are passionate about bringing 
            you the finest selection of products from around the world, delivered straight to your doorstep. Our 
            mission is to provide a seamless online shopping experience, offering high-quality products at 
            competitive prices, all backed by exceptional customer service.
          </p>
        </div>

        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" className="footer-link">Shop</Link></li>
            <li><Link to="/account" className="footer-link">Account</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <span>Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <span>Twitter</span>
            </a>
          </div>
        </div>

        <div className="footer-section contact-section">
          <h4>Contact & Branches</h4>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Address:</strong> 123 Main Street, Tirunelveli, Tamil Nadu, India
            </div>
            <div className="contact-item">
              <strong>Mobile:</strong> +91 98765 43210
            </div>
            <div className="contact-item">
              <strong>Email:</strong> care@freshcart.in
            </div>
          </div>
          <div className="branches">
            <strong>Branches:</strong>
            <div className="branch-list">
              <span className="branch">Chennai | </span>
              <span className="branch">Bangalore | </span>
              <span className="branch">Mumbai | </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FreshCart. All Rights Reserved.</p>
        <div className="footer-bottom-info">
          <span>Join 500,000+ happy households who trust us for their grocery needs!</span>
          <p>By Singaravelan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;