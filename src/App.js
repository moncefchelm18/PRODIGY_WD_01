import { useEffect, useState } from "react";

import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Home from "./Components/Home";
import React from "react";
import Products from "./Components/Products";
import Location from "./Components/Location";
import Footer from "./Components/Footer";
import FeaturedIn from "./Components/FeaturedIn";
import Inspiration from "./Components/Inspiration";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <FeaturedIn />
      <Categories />
      <Products />
      <Inspiration />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
