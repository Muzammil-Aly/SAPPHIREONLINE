import React from "react";
import "./Navbar.css";

const CartComp = ({ cartCount }) => {
  return (
    <>
      <div>{cartCount}</div>
    </>
  );
};

export default CartComp;
