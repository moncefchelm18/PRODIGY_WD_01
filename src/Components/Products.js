import React from "react";

const Product = (props) => {
  return (
    <div className="product-box">
      <div className="product-img-box">
        <img src={props.img} alt="chair" />
      </div>
      <div className="product-infos">
        <div className="product-name">{props.name}</div>
        <div className="product-description">{props.description}</div>
        <div className="product-price">{props.price}</div>
      </div>
      <div className="product-action">
        <div className="btn add-to-cart--btn">More details</div>
      </div>
    </div>
  );
};

const Products = () => {
  const productsData = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "4990.00 DZD",
      img: "./imgs/Categories/categorie-chair.jpg",
    },
    {
      id: 2,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 3,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Products/chair.jpg",
    },
    {
      id: 4,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Products/chair2.jpg",
    },
    {
      id: 5,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
    {
      id: 6,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Products/chair3.jpg",
    },
    {
      id: 7,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Products/chair.jpg",
    },
    {
      id: 8,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Products/chair2.jpg",
    },
    {
      id: 9,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Products/chair3.jpg",
    },
    {
      id: 10,
      name: "Semon Blanc",
      description: "Stylish cafe chair",
      price: "5990.00 DZD",
      img: "./imgs/Categories/categorie-table.jpg",
    },
  ];

  return (
    <section className="products-section" id="products">
      <div className="heading-teritary product-heading">Our Products</div>
      <div className="products-box">
        {productsData.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
      <div className="btn btn-scnd">View More</div>
    </section>
  );
};

export default Products;
