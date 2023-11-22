import React from "react";
import PropTypes from "prop-types";
import "./input.css";

const InputComponent = ({
  value,
  onChange,
  type = "text",
  currency = false,
}) => {
  const handleChange = (event) => {
    let newValue = event.target.value;

    if (type === "number" && !isNaN(newValue)) {
      newValue = parseFloat(newValue);
    }

    onChange(newValue);
  };

  const formatValue = (val) => {
    return currency && type === "number" ? `${val}€` : val;
  };

  return <input type={type} value={value} onChange={handleChange} />;
};

export default InputComponent;
