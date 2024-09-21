import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-items">
          <div className="footer-box">
            <h1 className="footer-box-header">À Propos de Nous</h1>
            <p className="footer-box-description">
              Nous sommes une destination de choix pour les amateurs de mobilier
              et de décoration, où l'élégance et le style se rencontrent.
            </p>
          </div>
          <div className="footer-box">
            <h1 className="footer-box-header">Nos services</h1>
            <ul className="footer-box-descriptions footer-list">
              <li>Catégories</li>
              <li>Produits</li>
              <li>Inspiration</li>
              <li>Localisation</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-box">
            <h1 className="footer-box-header">Nos services</h1>
            <ul className="footer-box-descriptions footer-list">
              <li>Catégories</li>
              <li>Produits</li>
              <li>Inspiration</li>
              <li>Localisation</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-box">
            <h1 className="footer-box-header">Abonnez Vous</h1>
            <div className="footer-logos">
              <a
                href="https://www.facebook.com/votre-page-facebook"
                title="Facebook"
                aria-label="Facebook"
                target="_blank"
                className="ins-tile__icon ins-tile__icon--outline-circle"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/votre-compte-instagram"
                title="Instagram"
                aria-label="Instagram"
                target="_blank"
                className="ins-tile__icon ins-tile__icon--outline-circle"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/votre-compte-tiktok"
                title="TikTok"
                aria-label="TikTok"
                target="_blank"
                className="ins-tile__icon ins-tile__icon--outline-circle"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://www.pinterest.com/votre-compte-pinterest"
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
            Casioppée <span>Deco</span>
          </div>
          <p>
            © 2023 Casioppée Doré. Tous droits réservés. | Politique de
            Confidentialité | Conditions d'utilisation
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
