import React from "react";

const Location = () => {
  return (
    <>
      <section className="location-section" id="location">
        <div className="heading-teritary location-header">
          Notre Localisation
        </div>
        <div className="location-box">
          <p>Jijel, jijel</p>
          <div className="iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12775.923216736925!2d5.7474449!3d36.8189799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f26157785ec631%3A0xe3b40b4c8c21b042!2sCassiop%C3%A9e%20Deco!5e0!3m2!1sfr!2sdz!4v1695661592105!5m2!1sfr!2sdz"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
