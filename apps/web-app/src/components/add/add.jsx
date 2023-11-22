import React, { useState } from "react";
import Modal from "react-modal";

import "./add.css";
import InputComponent from "../tools/input.jsx/input";
import ButtonComponent from "../tools/button/button";

import iconLocation from "../../assets/iconLocation.svg";
import iconCalendar from "../../assets/iconCalendar.svg";
import iconPrice from "../../assets/iconPrice.svg";

const AddComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <ButtonComponent
        text="Ajouter une annonce"
        onClick={() => setModalIsOpen(true)}
      />

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="container addContainer">
          <h2 className="title">Ajouté une annonce</h2>
          <div className="item">
            <img src={iconLocation} alt="Location" className="icon" />
            <InputComponent initialValue="{address}" type="text" />
          </div>

          <div className="item">
            <img src={iconCalendar} alt="Calendar" className="icon" />
            <InputComponent initialValue="{startDate}" type="date" />
          </div>

          <div className="item">
            <img src={iconCalendar} alt="Calendar" className="icon" />
            <InputComponent initialValue="{endDate}" type="date" />
          </div>

          <div className="item">
            <img src={iconPrice} alt="Price" className="icon" />
            <InputComponent
              initialValue="{price}"
              type="number"
              currency={true}
            />
          </div>
          <div class="buttonSection">
            <ButtonComponent
              text="Fermer"
              onClick={() => setModalIsOpen(false)}
            />

            <ButtonComponent text="Ajouter" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddComponent;
