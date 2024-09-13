import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faTruckFast,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  return (
    <>
      <div className="cart">
        <a class="fas fa-home fa-2x icon-black" href="#">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <div className="nav-login-cart">0</div>
      </div>
    </>
  );
};

export default Cart;
