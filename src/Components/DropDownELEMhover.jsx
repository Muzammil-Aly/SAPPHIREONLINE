
// export default HoverLinkComponent;
import React, { useState } from 'react';
import DropDownELem from './DropDownELemetns/DropDownElemWoman';

const DropDownELEMhover = () => {
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
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <a
        href="#"
        
      >
        WOMAN
      </a>

      {(isHovered || isDropdownHovered) && (
        <div
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          style={{
            position: 'absolute',
            top: '100%', // Position directly below the triggering element
            left: '0',
            paddingRight:'300px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 1000, // Ensures it appears on top
            padding: '10px',
            boxSizing: 'border-box',
            width: '100px', // Set a fixed width if needed
          }}
        >
          <DropDownELem/>
        </div>
      )}
    </div>
  );
};

export default DropDownELEMhover;
