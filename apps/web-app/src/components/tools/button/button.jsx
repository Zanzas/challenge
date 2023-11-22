import React from "react";
import "./button.css";

const ButtonComponent = ({ text, onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
