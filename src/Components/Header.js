import React, { useEffect } from "react";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showCategories, setShowCategories] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item");

    const handleScroll = () => {
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSectionId = section.getAttribute("id");
          // console.log("current section id", currentSectionId);
        }
        // console.log("current section id 2", currentSectionId);
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });

      // when click on a link remove the active class from all links
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          link.classList.add("active");
        });
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showMenu = () => {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
    const body = document.querySelector("body");
    body.classList.toggle("active");
    setMenuIcon(!menuIcon);
  };
  const showCategoriesItems = () => {
    setShowCategories(!showCategories);
    setShowProducts(false);
  };
  const showProductsItems = () => {
    setShowProducts(!showProducts);
    setShowCategories(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/imgs/logo-removebg-preview.png" alt="logo" />
        </div>
        <nav className="nav">
          <div>
            <a href="#home" className="nav-item active">
              Accueil
            </a>
          </div>

          {windowWidth > 768 ? (
            <>
              <div className=" dropdown active">
                <a href="#categories" className="dropdown-toggle nav-item ">
                  Catégories
                  <span class="arrow ">►</span>
                </a>
                <div className="dropdown-menu">
                  <a href="#category1">Category 1</a>
                  <a href="#category2">Category 2</a>
                  <a href="#category3">Category 3</a>
                </div>
              </div>

              <div className="dropdown active">
                <a href="#products" className="dropdown-toggle nav-item ">
                  Produits
                  <span class="arrow">►</span>
                </a>
                <div className="dropdown-menu">
                  <a href="#product1">Product 1</a>
                  <a href="#product2">Product 2</a>
                  <a href="#product3">Product 3</a>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {windowWidth <= 768 ? (
            <>
              <div>
                <a
                  href="#categories"
                  className="nav-item"
                  onClick={showCategoriesItems}
                >
                  Categories
                </a>
              </div>
              {showCategories ? (
                <ul>
                  <li>
                    <a href="#categories">Category 1</a>{" "}
                  </li>
                  <li>
                    <a href="#categories">Category 2</a>{" "}
                  </li>
                  <li>
                    <a href="#categories">Category 3</a>{" "}
                  </li>
                </ul>
              ) : (
                <></>
              )}

              <ul></ul>
              <div>
                <a
                  href="#products"
                  className="nav-item"
                  onClick={showProductsItems}
                >
                  Products
                </a>
              </div>

              {showProducts ? (
                <>
                  {" "}
                  <ul>
                    <li>
                      <a href="#products">Products 1</a>{" "}
                    </li>
                    <li>
                      <a href="#products">Products 1</a>{" "}
                    </li>
                    <li>
                      <a href="#products">Products 1</a>{" "}
                    </li>
                  </ul>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          <div className="">
            <a href="#inspiration" className="nav-item">
              Inspiration
            </a>
          </div>
          <div>
            <a href="#location" className="nav-item">
              Localisation
            </a>
          </div>
          <div>
            <a href="#contact" className="nav-item">
              Contact
            </a>
          </div>
        </nav>

        <div className="user-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            x="0px"
            y="0px"
            width="24"
            height="24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="nav-menu-icon" onClick={showMenu}>
          {!menuIcon ? (
            <img
              src="https://img.icons8.com/?size=100&id=3095&format=png&color=ffffff"
              alt="menu"
              width={24}
              height={24}
            />
          ) : (
            <img
              src="https://img.icons8.com/?size=100&id=8112&format=png&color=ffffff"
              alt="menu"
              width={24}
              height={24}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
