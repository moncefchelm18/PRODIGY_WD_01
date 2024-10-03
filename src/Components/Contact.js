import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2 className="heading-teritary contact-heading">Contact Us</h2>

            <p className="contact-description">
              Do you have any questions or concerns? Feel free to contact us.
            </p>

            <form action="#" className="contact-form">
              <div className="form-group">
                <div className="form-group-mini">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Name*"
                  />
                </div>
                <div className="form-group-mini">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="form-input"
                    placeholder="Last Name*"
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
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="Phone Number*"
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
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="btn contact-btn">
                Send
              </button>
            </form>
          </div>

          <div className="separator"></div>

          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <div className="contact-info-text">+213 557 206 124</div>
            </div>

            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <div className="contact-info-text">
                <a href="mailto:info@example.com">cassiopee@example.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="fab fa-facebook"></i>
              <div className="contact-info-text">
                <a
                  href="https://www.facebook.com/CassiopeeDeco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cassiopée Deco
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <i className="fab fa-instagram"></i>
              <div className="contact-info-text">
                <a
                  href="https://www.instagram.com/cassiopee_deco_jijel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cassiopée Deco
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
