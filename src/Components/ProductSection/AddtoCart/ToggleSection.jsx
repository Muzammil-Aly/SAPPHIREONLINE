import React, { useState } from "react";
import Navbar from "../../Navabar/Navbar";
import "./ToggleSection.css";

const ToggleSection = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="toggle-container">
        <div className="header">
          <h2 className="pro-text">Product Details</h2>
          <button
            className={`toggle-btn ${isOpen ? "active" : ""}`}
            onClick={toggleSection}
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
        {isOpen && (
          <div className="details-content-product">
            <div className="details-product">
              <div className="lineOne space">
                <p className=" text-details">A-Line Shirt</p>
                <p>
                  Create an elevated summer look in our white, embroidered
                  cambric, long A-line shirt.
                </p>
              </div>
              <div className="linetwo space">
                <p className=" text-details">Details:</p>
                <p>
                  Dyed Front with Embroidery, Dyed Back with Embroidery, Full
                  Sleeves, Round Neckline with a slit
                </p>
                <div className="text-flex">
                  <div>
                    <p className=" text-details text-flex">Color : </p>
                  </div>
                  <div>
                    <p>{item.Color}</p>
                  </div>
                </div>
                <div className="text-flex">
                  <div>
                    <p className=" text-details text-flex">Fabric : </p>
                  </div>
                  <div>
                    <p>{item.Fabric}</p>
                  </div>
                </div>
              </div>
              <div className="linethree space ">
                <p className=" text-details">SIZE & FIT</p>
                <p>Model height: 5 Feet 6 Inches</p>
                <p>Model Wears: XS</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ToggleSection;
