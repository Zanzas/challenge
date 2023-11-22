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

    if (currency && type === "number") {
      if (!isNaN(newValue)) {
        newValue = parseFloat(newValue).toFixed(2);
      }
    }

    onChange(newValue);
  };

  const formatValue = (val) => {
    return currency && type === "number" ? `${val}€` : val;
  };

  return (
    <input type={type} value={formatValue(value)} onChange={handleChange} />
  );
};

export default InputComponent;
