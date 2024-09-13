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
import DropDownELem from "../DropDownELemetns/DropDownELem";
import DropDown from "./NavBarDropDown/DropDown";

const Navbar = () => {
  return (
    <>
      <div className="Navbar-stick">
        <div className="containerr m-2 ">
          <div className="image">
            <a href="#">
              <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/NEW_LOGO_-_Black.svg?v=1675150363"></img>
            </a>
          </div>
          <div className="search-box ">
            <input
              id="MysearchBox"
              className="search-box-input"
              type="text"
              placeholder="FIND YOUR FAVOURITES"
            />

            <div className="search-icon fas fa-home  ">
              <button className="searchIcon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          <div className="right-nav">
            <div className="track-order">
              <a class="fas fa-home fa-2x icon-black" href="#">
                <FontAwesomeIcon icon={faTruckFast} />
              </a>
            </div>

            <div className="user">
              <a class="fas fa-home fa-2x icon-black " href="#">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>

            <div className="cart">
              <a class="fas fa-home fa-2x icon-black" href="#">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              <div className="nav-login-cart">0</div>
            </div>
          </div>
        </div>
        <DropDown />
      </div>
      <div></div>
    </>
  );
};

export default Navbar;
