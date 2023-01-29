import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="itemE">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Kids Wears</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="itemE">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="itemE">
          <h1>About</h1>
          <span>
            In partnership with the Kwara Sate Governtment, the Garment Galore
            ...
          </span>
        </div>
        <div className="itemE">
          <h1>Contact</h1>
          <span>Be in touch with us:</span>
          <div className="mail">
            <input type="text" placeholder="Enter your e-mail..." />
            <button>JOIN US</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Garment Galore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
