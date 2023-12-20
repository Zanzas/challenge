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
      <h2 className="title">Rechercher un utilisateur</h2>
      <div className="item">
        <img src={iconLocation} alt="Location" className="icon" />
        <InputComponent
          value={address}
          type="string"
          onChange={(value) => setAddress(value)}
        />
      </div>
      <ButtonComponent text="Rechercher" />
    </div>
  );
};

export default FilterComponent;
