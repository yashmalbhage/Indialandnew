// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact</h5>
            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
            <p>+1(123)-456-7890</p>
            <p>info@mydomain.com</p>
          </div>
          <div className="col-md-6">
            <h5>Sources</h5>
            <ul className="list-unstyled">
              {/* ... (list items) ... */}
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <h5>Links</h5>
            <ul className="list-unstyled">
              {/* ... (list items) ... */}
            </ul>
          </div>
          <div className="col-md-6">
            <p>
              Copyright ©2023 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
