import React, { useState } from "react";
import PropTypes from "prop-types";
import "./filter.css";
import ButtonComponent from "../tools/button/button";
import InputComponent from "../tools/input/input";

import iconLocation from "../../assets/iconLocation.svg";
import iconCalendar from "../../assets/iconCalendar.svg";
import iconPrice from "../../assets/iconPrice.svg";

const FilterComponent = () => {
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="container">
      <h2 className="title">Mes filtres</h2>
      <div className="item">
        <img src={iconLocation} alt="Location" className="icon" />
        <InputComponent
          value={address}
          type="string"
          onChange={(value) => setAddress(value)}
        />
      </div>

      <div className="item">
        <img src={iconCalendar} alt="Calendar" className="icon" />
        <InputComponent
          value={startDate}
          type="string"
          onChange={(value) => setStartDate(value)}
        />
      </div>

      <div className="item">
        <img src={iconCalendar} alt="Calendar" className="icon" />
        <InputComponent
          value={endDate}
          type="string"
          onChange={(value) => setEndDate(value)}
        />
      </div>

      <div className="item">
        <img src={iconPrice} alt="Price" className="icon" />
        <InputComponent
          value={price}
          type="number"
          currency={true}
          onChange={(value) => setPrice(value)}
        />
      </div>

      <ButtonComponent text="Rechercher" />
    </div>
  );
};

export default FilterComponent;
