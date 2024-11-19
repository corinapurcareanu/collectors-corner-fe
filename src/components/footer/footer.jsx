import {React} from "react"
import './footer.css';

export const Footer = () => {


    return (
 
        <div className="footer" role="banner">
        <div className="footer-content">
          <p>&copy; 2024 Collectors Corner. All rights reserved.</p>
          <div className="footer-links">
            <a href="/" className="footer-link">About Us</a>
            <a href="/" className="footer-link">Contact</a>
            <a href="/" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    );
};