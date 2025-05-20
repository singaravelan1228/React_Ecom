import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We provide the best shopping experience with top-quality products,  we are passionate about bringing you the finest selection of [Product Category] from around the world, delivered straight to your doorstep. Our mission is to provide a seamless online shopping experience, offering high-quality products at competitive prices, all backed by exceptional customer service..</p>
        </div>

        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} E-Commerce. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
