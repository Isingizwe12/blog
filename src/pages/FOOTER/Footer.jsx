import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    
    <footer className="footer">
      
         <div className="footer-icons">
         
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-links">
        <h3>NAVIGATION</h3>
        <ul>
          
          <li><a href="#">SIGN UP</a></li>
          <li><a href="#">LOGIN</a></li>
        </ul></div>
        <div className="footer-links">
        <h3>SUPPORT</h3>
        <ul>
          <li><a href="#">CONTACT US</a></li>
         
        </ul>
        </div>
        <div className="footer-links">
        <h3>LEGAL</h3>
       
        <ul>
          <li><a href="#">TERMS OF SERVICES</a></li>
          <li><a href="#">PRIVACY POLICY</a></li>
        
        </ul>
      </div>
      
   
    </footer>
  );
};

export default Footer;
