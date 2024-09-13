import React, { useState } from "react";
import DropDownELem from "../../DropDownELemetns/DropDownELem";

const HoverLinkComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isDropdownHovered) {
      setIsHovered(false);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
    if (!isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <a href="#">NEW IN</a>

      {(isHovered || isDropdownHovered) && (
        <div
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1000,
            padding: "10px",
            boxSizing: "border-box",
            width: "200px",
          }}
        >
          <DropDownELem />
        </div>
      )}
    </div>
  );
};

export default HoverLinkComponent;
