import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faTruckFast,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../../ShopByCategory/Cart";
const Caart01 = ({ cartCount }) => {
  return (
    <>
      <div className="cart">
        <a class="fas fa-home fa-2x icon-black" href="#">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <div className="nav-login-cart">{cartCount}</div>
      </div>
    </>
  );
};

export default Caart01;
