import React, { useState } from "react";
import "./FilterDropdown.css";

const FilterDropdown = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Featured");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("muzammil", selectedItem);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span className="button-text">{selectedItem}</span>{" "}
        <span className="button-arrow">{isOpen ? "▲" : "▼"} </span>{" "}
        {/* Using Unicode arrows */}
      </button>

      {isOpen && (
        // <div className="list-container">
        <div className="dropdown-list list-container">
          {list.map((item) => (
            <li
              onClick={() => {
                setSelectedItem(item.listName);
              }}
            >
              {item.listName}
            </li>
          ))}
        </div>
        // </div>
      )}
    </div>
  );
};
export default FilterDropdown;
