import React from "react";
import "./Addtocartp1.css";
import ToggleSection from "./ToggleSection";
import Navbar from "../../Navabar/Navbar";
import Footer from "../../Footer/Footer";
const Addtocartp1 = ({ item }) => {
  // if (!item) return null;
  return (
    <>
      <Navbar />
      <div className="cart-section">
        <div className="cart-images">
          <div className="cart-images-con01">
            <div className="image-first image-bottom">
              <a href="#">
                <img src={item.imageUrl} />
                {/* <img src="https://pk.sapphireonline.pk/cdn/shop/files/0002PSG24V14_2.jpg?v=1714383092&width=600" /> */}
              </a>
            </div>
            <div className="image-scnd ">
              <a href="#">
                <img src={item.imageUrl} />

                {/* <img src="https://pk.sapphireonline.pk/cdn/shop/files/0002PSG24V14_1.jpg?v=1714383092&width=600" /> */}
              </a>
            </div>
          </div>
          <div className="cart-images-con2">
            <div className="image-third image-bottom">
              <a href="#">
                <img src={item.imageUrl} />

                {/* <img src="https://pk.sapphireonline.pk/cdn/shop/files/0002PSG24V14_4.jpg?v=1714383092&width=600" /> */}
              </a>
            </div>
            <div className="image-forth"></div>
            <a href="#">
              <img src={item.imageUrl} />

              {/* <img src="https://pk.sapphireonline.pk/cdn/shop/files/0002PSG24V14_3.jpg?v=1714383092&width=600" /> */}
            </a>
          </div>
        </div>

        <div className="cart-text">
          <div className="details">
            <div className="secone">
              <h2>{item.CategoryNamees}</h2>
              <div className="price">
                <p className="text-header">{item.Price}</p>
                <p>Rs.3,495.00</p>
              </div>
              <p>SKU: 0002PSG24V14-XSM-999</p>
              <p>SIZE :M</p>
            </div>
            <div className="boxes-main">
              <div className="boxes-container">
                <div className="boxes">
                  <a href="#">XXS</a>
                </div>
                <div className="boxes">
                  <a href="#"> XS </a>
                </div>
                <div className="boxes">
                  <a href="#"> S </a>
                </div>
                <div className="boxes">
                  <a href="#"> M </a>
                </div>
                <div className="boxes">
                  <a href="#"> L </a>
                </div>
                <div className="boxes">
                  <a href="#"> XL </a>
                </div>
              </div>
            </div>
            <div className="addtobag-content">
              <div className="incre-decre">
                <div className="incrment combine">
                  <button>-</button>
                </div>
                <div className="count">01</div>
                <div className="incre-decre">
                  <div className="decrement combine">
                    <button>+</button>
                  </div>
                </div>
              </div>
              <div className="Addtobag">
                <button class="button">ADD TO BAG</button>
              </div>
            </div>
          </div>
          <div className="product-list">
            <ToggleSection item={item} />
            <div className="text-flex m-5">
              <div>
                <p className=" text-details text-flex">Note : </p>
              </div>
              <div>
                <p> Actual product color may vary slightly from the image.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Addtocartp1;
