import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-items">
          <div className="footer-box">
            <h1 className="footer-box-header">About Us</h1>
            <p className="footer-box-description">
              We are a top destination for furniture and decoration lovers,
              where elegance and style meet.
            </p>
          </div>
          <div className="footer-box">
            <h1 className="footer-box-header">Our Services</h1>
            <ul className="footer-box-descriptions footer-list">
              <li>Categories</li>
              <li>Products</li>
              <li>Inspiration</li>
              <li>Location</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-box">
            <h1 className="footer-box-header">Our Services</h1>
            <ul className="footer-box-descriptions footer-list">
              <li>Categories</li>
              <li>Products</li>
              <li>Inspiration</li>
              <li>Location</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-box">
            <h1 className="footer-box-header">Subscribe</h1>
            <div className="footer-logos">
              <a
                href="https://www.facebook.com/your-facebook-page"
                title="Facebook"
                aria-label="Facebook"
                target="_blank"
                className="ins-tile__icon ins-tile__icon--outline-circle"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/your-instagram-account"
                title="Instagram"
                aria-label="Instagram"
                target="_blank"
                className="ins-tile__icon ins-tile__icon--outline-circle"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/your-tiktok-account"
                title="TikTok"
                aria-label="TikTok"
                target="_blank"
                className="ins-tile__icon ins-tile__icon--outline-circle"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://www.pinterest.com/your-pinterest-account"
                title="Pinterest"
                aria-label="Pinterest"
                target="_blank"
                className="ins-tile__icon ins-tile__icon--outline-circle"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>{" "}
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-header">
            Cassiopée <span>Deco</span>
          </div>
          <p>
            © 2023 Cassiopée Doré. All rights reserved. | Privacy Policy | Terms
            of Use
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
