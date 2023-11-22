import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.css";

const InputComponent = ({ initialValue, type = "text", currency = false }) => {
  const initialFormattedValue =
    typeof initialValue === "number" ? initialValue.toFixed(2) : initialValue;

  const [value, setValue] = useState(initialFormattedValue);

  const handleChange = (event) => {
    let newValue = event.target.value;

    if (currency && type === "number") {
      if (!isNaN(newValue)) {
        newValue = parseFloat(newValue).toFixed(2);
      }
    }

    setValue(newValue);
  };

  const formatValue = (val) => {
    return currency && type === "number" ? `${val}€` : val;
  };

  return <input type={type} value={value} onChange={handleChange} />;
};

export default InputComponent;
