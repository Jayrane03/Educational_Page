import React from 'react';
import "../../Styles/index.css";

const Footer = () => {
  return (
    <footer className='foot' style={{ backgroundColor: '#7eec6d', color: '#fff' }}>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>BrainBoost provides dynamic and interactive content across various subjects and disciplines.
</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-7890</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@brainboost.com</span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#" className='fs-5 fw-medium'>Home</a></li>
            <li><a href="#" className='fs-5 fw-medium'>Courses</a></li>
            <li><a href="#" className='fs-5 fw-medium'>About Us</a></li>
            <li><a href="#" className='fs-5 fw-medium'>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section follow">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#" className='m-2 fs-4'><i className="fab fa-facebook"></i></a>
            <a href="#" className='m-2 fs-4'><i className="fab fa-twitter"></i></a>
            <a href="#" className='m-2 fs-4'><i className="fab fa-instagram"></i></a>
            <a href="#" className='m-2 fs-4'><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2024 BrainBoost. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
