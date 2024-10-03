import React from "react";

const Categories = () => {
  return (
    <>
      <section className="categories-section" id="categories">
        <div className="heading-teritary">Our Categories</div>
        <div className="categories-description">
          Explore our range of furniture categories
        </div>
        <div className="categories-box">
          <div className="categorie-item">
            <div className="categorie-item-img">
              <img
                src="./imgs/Categories/categorie-chair.jpg"
                alt="category 1"
              />
              <div className="info">50 items</div>
            </div>
            <div className="categorie-title">Chairs</div>
          </div>
          <div className="categorie-item">
            <div className="categorie-item-img">
              <img
                src="./imgs/Categories/categorie-table.jpg"
                alt="category 2"
              />
              <div className="info">50 items</div>
            </div>
            <div className="categorie-title">Tables</div>
          </div>
          <div className="categorie-item">
            <div className="categorie-item-img">
              <img
                src="./imgs/Categories/categorie-decoration.jpg"
                alt="category 3"
              />
              <div className="info">50 items</div>
            </div>

            <div className="categorie-title">Decoration</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
