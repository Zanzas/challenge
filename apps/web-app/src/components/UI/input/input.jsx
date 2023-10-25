import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputComponent({
  inputId,
  password = false,
  placeholder,
  title,
  maxLength,
  value: initialValue,
  onValueChange
}) {
  const [value, setValue] = useState(initialValue || '');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div className="input-container">
      <label>{title}</label>
      <input
        value={value}
        onChange={handleInputChange}
        id={inputId}
        type={password ? 'password' : 'text'}
        placeholder={placeholder}
        title={title}
        maxLength={maxLength || undefined}
        required
      />
    </div>
  );
}

InputComponent.propTypes = {
  inputId: PropTypes.string,
  password: PropTypes.bool,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  onValueChange: PropTypes.func
};

export default InputComponent;
