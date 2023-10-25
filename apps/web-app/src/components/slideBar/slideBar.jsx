import { useState } from "react";

import "./slideBar.css";

export default function SliderBar() {

  const [width, setWidth] = useState(25); // Largeur initiale de l'élément

  const handleMouseDown = (event) => {
    event.preventDefault(); 
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const newWidth = Math.round((event.clientX / window.innerWidth) * 100);
    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-bar">
          <div className="slider-bar-size" style={{ width: `${width}%`, cursor: 'grab' }} onMouseDown={handleMouseDown}> {width}</div>
        </div>
      </div>
    </>
  );
}