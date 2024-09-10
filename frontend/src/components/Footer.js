import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout;
    const handleMouseMove = () => {
      setVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 2000); // Hide after 2 seconds of inactivity
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <footer className={`footer ${visible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="row">
          <div className="col contact-us">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:info@empirefoundation.org">info@empirefoundation.org</a></p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Empire Road, Johannesburg</p>
          </div>
          <div className="col">
            <h5>Quick Links</h5>
            <div className="d-flex flex-wrap justify-content-center">
              <a href="/" className="btn btn-link">Home</a>
              <a href="/services" className="btn btn-link">Services</a>
              <a href="/about" className="btn btn-link">About Us</a>
              <a href="/contact" className="btn btn-link">Contact</a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; {new Date().getFullYear()} Empire Partner Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
