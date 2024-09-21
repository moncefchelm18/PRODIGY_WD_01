import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2 className="heading-teritary contact-heading">Contactez-nous</h2>

            <p className="contact-description">
              Vous avez des questions ou des préoccupations? N'hésitez pas à
              nous contacter.
            </p>

            <form action="#" className="contact-form">
              <div className="form-group">
                <div className="form-group-mini">
                  <label htmlFor="name" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Nom*"
                  />
                </div>
                <div className="form-group-mini">
                  <label htmlFor="lastname" className="form-label">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="form-input"
                    placeholder="Prénom*"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-group-mini">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Email*"
                  />
                </div>
                <div className="form-group-mini">
                  <label htmlFor="tel" className="form-label">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="Numéro de téléphone*"
                  />
                </div>
              </div>

              <div className="form-group msg">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="form-input"
                  placeholder="Entrez votre message"
                ></textarea>
              </div>

              <button type="submit" className="btn contact-btn">
                Envoyer
              </button>
            </form>
          </div>

          <div className="separator"></div>

          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <div className="contact-info-text">+213 555 555 555</div>
            </div>

            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <div className="contact-info-text">
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              {/* create me now for facebook */}
              <i className="fab fa-facebook"></i>
              <div className="contact-info-text">
                <a
                  href="https://www.facebook.com/CassiopeeDeco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Casioppé Deco
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              {/* create me now for instagram */}
              <i className="fab fa-instagram"></i>
              <div className="contact-info-text">
                <a
                  href="https://www.instagram.com/cassiopee_deco_jijel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Casioppé Deco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
