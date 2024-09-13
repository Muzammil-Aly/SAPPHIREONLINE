import React from "react";
import { useState } from "react";
import "./DropDown.css";
import DropDownELem from "../../DropDownELemetns/DropDownELem";
import DropDownELemWoman from "../../DropDownELemetns/DropDownElemWoman";
import Woman from "../../ProductSection/CategorySection/SubCateogry/Womandata";
import Slider from "react-slick";

const DropDown = () => {
  let [Dropdownlist, setDropdownlist] = useState("NEW IN");
  const [isToggled, setIsToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="DropDownContainer">
        <ul className="list-items ">
          <li
            onMouseEnter={() => setDropdownlist("NEW IN")}
            onMouseLeave={() => setDropdownlist("")}
          >
            <a
              href="#"
              onClick={() => {
                setIsToggled(true);
                setSelectedItem(Dropdownlist);
              }}
            >
              NEW IN
            </a>
            {Dropdownlist === "NEW IN" ? (
              <div className="examp">
                <DropDownELem />
              </div>
            ) : null}
          </li>

          <li>
            <a
              onMouseEnter={() => setDropdownlist("WOMAN")}
              onMouseLeave={() => setDropdownlist("")}
              href="#"
              onClick={() => {
                setIsToggled(true);
                setSelectedItem(Dropdownlist);
              }}
            >
              WOMAN
              {Dropdownlist === "WOMAN" ? (
                <div className="examp">
                  <DropDownELemWoman />
                </div>
              ) : null}
            </a>
          </li>

          <li>
            <a
              onMouseEnter={() => setDropdownlist("MAN")}
              onMouseLeave={() => setDropdownlist("")}
              href="#"
              onClick={() => {
                setIsToggled(true);
                setSelectedItem(Dropdownlist);
              }}
            >
              MAN
              {Dropdownlist === "MAN" ? (
                <div className="examp">
                  <DropDownELemWoman />
                </div>
              ) : null}
            </a>
          </li>

          <li>
            <a
              onMouseEnter={() => setDropdownlist("KIDS")}
              onMouseLeave={() => setDropdownlist("")}
              href="#"
              onClick={() => {
                setIsToggled(true);
                setSelectedItem(Dropdownlist);
              }}
            >
              KIDS
              {Dropdownlist === "KIDS" ? (
                <div className="examp">
                  <DropDownELemWoman />
                </div>
              ) : null}
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => setDropdownlist("BEAUTY")}
              onMouseLeave={() => setDropdownlist("")}
              href="#"
              onClick={() => {
                setIsToggled(true);
                setSelectedItem(Dropdownlist);
              }}
            >
              BEAUTY
              {Dropdownlist === "BEAUTY" ? (
                <div className="examp">
                  <DropDownELem />
                </div>
              ) : null}
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => setDropdownlist("ACCESSORIES")}
              onMouseLeave={() => setDropdownlist("")}
              href="#"
              onClick={() => {
                setIsToggled(true);
                setSelectedItem(Dropdownlist);
              }}
            >
              ACCESSORIES
              {Dropdownlist === "ACCESSORIES" ? (
                <div className="examp">
                  <DropDownELem />
                </div>
              ) : null}
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => setDropdownlist("HOME")}
              onMouseLeave={() => setDropdownlist("")}
              href="#"
              onClick={() => {
                setIsToggled(true);
                setSelectedItem(Dropdownlist);
              }}
            >
              HOME
              {Dropdownlist === "HOME" ? (
                <div className="examp">
                  <DropDownELem />
                </div>
              ) : null}
            </a>
          </li>

          <li>
            <a
              onMouseEnter={() => setDropdownlist("THE EDIT")}
              onMouseLeave={() => setDropdownlist("")}
              href="#"
              onClick={() => {
                setIsToggled(true);
                setSelectedItem(Dropdownlist);
              }}
            >
              THE EDIT
            </a>
          </li>

          {/* <li>
            <a
              href="#"
              onClick={() => {
                <Slider />;
              }}
            >
              THE EDIT
            </a>
          </li> */}
        </ul>
        {isToggled && (
          <div className="overlay">
            <button
              className="close-overlay"
              onClick={() => setIsToggled(false)}
            >
              X
            </button>
            {selectedItem === "THE EDIT" ? (
              <img src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1380&t=st=1726095789~exp=1726096389~hmac=f56eb344a7e3adeb0eec949ca9f3607dd0322a11f74ee76c4887e620cecef709" />
            ) : (
              <Woman name={selectedItem} />
            )}
            {/* <Woman name={selectedItem} /> */}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
