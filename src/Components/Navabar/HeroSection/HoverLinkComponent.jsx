import React, { useState } from 'react';

const HoverLinkComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <a
        href="#"
        style={{
          textDecoration: 'none',
          color: 'blue',
          fontWeight: 'bold',
        }}
      >
        Hover over this link
      </a>

      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'lightcoral',
            padding: '10px',
            zIndex: 1,
            width: '200px',
            borderRadius: '5px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          Hover Component
        </div>
      )}
    </div>
  );
};

export default HoverLinkComponent;
