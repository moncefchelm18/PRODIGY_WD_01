import React from "react";
import InspirationSlideshow from "./InspirationSlideshow"; // Assuming this handles the right-side slideshow.

const Inspiration = () => {
  return (
    <section className="inspiration-section" id="inspiration">
      <div className="inspiration-container">
        {/* Left side content */}
        <div className="inspiration-content">
          <h2 className="inspiration-heading">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="inspiration-description">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <a href="#" className="explore-button">
            Explore More
          </a>
        </div>

        {/* Right side slideshow */}
        <div className="inspiration-slideshow">
          <InspirationSlideshow />
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
