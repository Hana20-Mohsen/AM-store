import React from "react";
import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPinterestP
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">


        <div className="footer-brand">

          <h2>
            My <span>Brand</span>
          </h2>

          <p>
            Luxury beauty products designed to make
            your everyday routine more beautiful.
          </p>

          <div className="social-icons">

            <a><FaInstagram /></a>
            <a><FaFacebookF /></a>
            <a><FaTiktok /></a>
            <a><FaPinterestP /></a>

          </div>

        </div>



        <div className="footer-links">

          <h3>Shop</h3>

          <a>New Arrivals</a>
          <a>Best Sellers</a>
          <a>Skincare</a>
          <a>Collections</a>

        </div>



        <div className="footer-links">

          <h3>Information</h3>

          <a>About Us</a>
          <a>Contact</a>
          <a>Shipping</a>
          <a>Returns</a>

        </div>



        <div className="footer-links">

          <h3>Contact</h3>

          <a>info@mybrand.com</a>
          <a>+20 123 456 789</a>
          <a>Cairo, Egypt</a>

        </div>


      </div>


      <div className="footer-bottom">

        © 2026 My Brand. All Rights Reserved.

      </div>


    </footer>
  );
};


export default Footer;