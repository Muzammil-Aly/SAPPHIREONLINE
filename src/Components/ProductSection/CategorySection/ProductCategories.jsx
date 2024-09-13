import React from "react";
import Sliderr from "../../Navabar/HeroSection/Sliderr";
import WhatsNew from "./SubCateogry/WhatsNew";
import ShopByCategory from "./ShopByCategory";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navabar/Navbar";
import Woman from "./SubCateogry/Womandata";

const ProductCategories = () => {
  return (
    <>
      <Navbar />
      <Sliderr />
      {/* <WhatsNew /> */}
      <ShopByCategory />
      <Footer />
    </>
  );
};

export default ProductCategories;
