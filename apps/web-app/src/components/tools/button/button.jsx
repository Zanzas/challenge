import React from "react";
import "./button.css";

const ButtonComponent = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ButtonComponent;
