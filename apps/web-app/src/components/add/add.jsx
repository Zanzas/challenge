import React, { useState } from "react";
import Modal from "react-modal";

import "./add.css";
import InputComponent from "../tools/input/input";
import ButtonComponent from "../tools/button/button";
import { postCreateParkService } from "../../services/postCreateParkService";

import iconLocation from "../../assets/iconLocation.svg";
import iconCalendar from "../../assets/iconCalendar.svg";
import iconPrice from "../../assets/iconPrice.svg";

const AddComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");

  const handlePost = async () => {
    const data = {
      address,
      startDate,
      endDate,
      price,
    };
    try {
      await postCreateParkService(data);
      setModalIsOpen(false);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
    }
  };

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
            <img src={iconLocation} alt="address" className="icon" />
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
              onChange={(value) => setPrice(value)}
            />
          </div>
          <div className="buttonSection">
            <ButtonComponent
              text="Fermer"
              onClick={() => setModalIsOpen(false)}
            />

            <ButtonComponent text="Ajouter" onClick={() => handlePost()} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddComponent;
