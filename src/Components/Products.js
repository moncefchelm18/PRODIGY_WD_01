import React from "react";

const Product = (props) => {
  return (
    <div className="product-box">
      <div className="product-img-box">
        <img src={props.img} alt="chaise" />
      </div>
      <div className="product-infos">
        <div className="product-name">{props.name}</div>
        <div className="product-description">{props.description}</div>
        <div className="product-price">{props.price}</div>
      </div>
      <div className="product-action">
        <div className="btn add-to-cart--btn">Plus de details</div>
      </div>
    </div>
  );
};

const Products = () => {
  // Create an array of data to represent the products
  const productsData = [
    {
      id: 1,
      name: "Syltherine",
      description: "Chaise cafe stylish",
      price: "4990.00 DZD",
      img: "./imgs/Categories/categorie-chair.jpg",
    },
    {
      id: 2,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 3,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 4,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 5,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 6,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 7,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 8,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 9,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 10,
      name: "Semon blanc",
      description: "Chaise cafe stylish",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    // Add more products as needed
  ];

  return (
    <section className="products-section" id="products">
      <div className="heading-teritary product-heading">Nos produits</div>
      <div className="products-box">
        {productsData.map((product, index) => (
          <Product
            key={index} // Ensure each product has a unique key
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
      <div className="btn btn-scnd">Voir Plus</div>
    </section>
  );
};

export default Products;
