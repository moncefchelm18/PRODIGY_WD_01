import React from "react";

const Categories = () => {
  return (
    <>
      <section className="categories-section" id="categories">
        <div className="heading-teritary">Nos catégories</div>
        <div className="categories-description">
          Parcourez notre gamme de catégories de mobilier
        </div>
        <div className="categories-box">
          <div className="categorie-item">
            <div className="categorie-item-img">
              <img
                src="./imgs/Categories/categorie-chair.jpg"
                alt="categorie 1"
              />
              <div className="info">50 item</div>
            </div>
            <div className="categorie-title">Chaises</div>
          </div>
          <div className="categorie-item">
            <div className="categorie-item-img">
              <img
                src="./imgs/Categories/categorie-table.jpg"
                alt="categorie 2"
              />
              <div className="info">50 item</div>
            </div>
            <div className="categorie-title">Tables</div>
          </div>
          <div className="categorie-item">
            <div className="categorie-item-img">
              <img
                src="./imgs/Categories/categorie-decoration.jpg"
                alt="categorie 1"
              />
              <div className="info">50 item</div>
            </div>

            <div className="categorie-title">Décoration</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
