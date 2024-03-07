// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">
          &copy; 2024 Your Company Name | All rights reserved
        </span>
        <div className="social-icons">
          <a href="#" className="mr-2"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="mr-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="mr-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="mr-2"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
