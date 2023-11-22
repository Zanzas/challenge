import React from "react";
import PropTypes from "prop-types";
import "./filter.css";
import ButtonComponent from "../tools/button/button";
import InputComponent from "../tools/input.jsx/input";

import iconLocation from "../../assets/iconLocation.svg";
import iconCalendar from "../../assets/iconCalendar.svg";
import iconPrice from "../../assets/iconPrice.svg";

const FilterComponent = ({ address, startDate, endDate, price }) => {
  FilterComponent.propTypes = {
    address: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  return (
    <div className="container">
      <h2 className="title">Mes filtres</h2>
      <div className="item">
        <img src={iconLocation} alt="Location" className="icon" />
        <InputComponent initialValue={address} type="text" />
      </div>

      <div className="item">
        <img src={iconCalendar} alt="Calendar" className="icon" />
        <InputComponent initialValue={startDate} type="date" />
      </div>

      <div className="item">
        <img src={iconCalendar} alt="Calendar" className="icon" />
        <InputComponent initialValue={endDate} type="date" />
      </div>

      <div className="item">
        <img src={iconPrice} alt="Price" className="icon" />
        <InputComponent initialValue={price} type="number" currency={true} />
      </div>

      <ButtonComponent text="Rechercher" />
    </div>
  );
};

export default FilterComponent;
