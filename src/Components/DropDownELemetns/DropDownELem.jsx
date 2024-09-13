import React from "react";
import "./DropDownELem.css";

const DropDownELem = () => {
  return (
    <>
      <div className="containerELEM">
        <div className="New-in">
          <div className="New-in-img-con">
            <a href="#">
              <img
                class="New-in-img"
                src="https://cdn.shopify.com/s/files/1/1592/0041/files/new-in-dropdown_c4da0a45-87d4-43ca-94aa-c4e3c82f5dad.jpg?v=1723117076&width=400"
              />
            </a>
          </div>
          <div className="items-list">
            <div className="left-items-list">
              <div class="LeftHeading">
                <a href="#">New IN</a>
              </div>
              <div class="solidlineN"></div>
              <ul class="List ">
                <li class="lis fade-text">
                  <a href="#">Unstitched</a>
                </li>

                <li class="lis">
                  <a href="#">Ready to Wear</a>
                </li>
                <li class="lis">
                  <a href="#">Man</a>
                </li>
                <li class="lis">
                  <a href="#">West</a>
                </li>
                <li class="lis">
                  <a href="#">Home</a>
                </li>
                <li class="lis">
                  <a href="#">Kids</a>
                </li>
                <li class="lis">
                  <a href="#">Accessories</a>
                </li>
                <li class="lis">
                  <a href="#">Modest Wear</a>
                </li>
              </ul>
            </div>

            <div className="Right-items-list">
              <div class="LeftHeading">
                <a href="#">BY COLLECTION</a>
              </div>
              <div class="solidlineN"></div>
              <ul class="List">
                <li class="lis">
                  <a href="#">Botanical Bliss</a>
                </li>

                <li class="lis">
                  <a href="#">Pehchan</a>
                </li>

                <li class="lis">
                  <a href="#">Signature</a>
                </li>

                <li class="lis">
                  <a href="#">Statement</a>
                </li>

                <li class="lis">
                  <a href="#">Daily</a>
                </li>

                <li class="lis">
                  <a href="#">Jacquard</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDownELem;
