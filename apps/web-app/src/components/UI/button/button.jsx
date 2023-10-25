import React, { useState } from 'react';

import './button.css'
function Button({ title="Cliquez-moi", color="blue" , hoverColor="lightblue"}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="button"
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
