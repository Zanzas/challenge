import React, { useState } from 'react';

function Button({ title, color, hoverColor, onButtonClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="start-button"
      onClick={onButtonClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? hoverColor : color,
      }}
    >
      {title}
    </button>
  );
}

export default Button;
