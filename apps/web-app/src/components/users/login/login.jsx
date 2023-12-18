import React, { useState } from "react";
import Modal from "react-modal";

import "./login.css";
import InputComponent from "../../tools/input/input";
import ButtonComponent from "../../tools/button/button";
import { postCreateParkService } from "../../../services/postCreateParkService";

import iconLocation from "../../../assets/iconLocation.svg";
import iconCalendar from "../../../assets/iconCalendar.svg";

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePost = async () => {
    const data = {
      email,
      password
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
        text="Se connecter"
        onClick={() => setModalIsOpen(true)}
      />

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="container addContainer">
          <h2 className="title">Se connecter</h2>
          <div className="item">
            <img src={iconLocation} alt="email" className="icon" />
            <InputComponent
              value={email}
              type="string"
              onChange={(value) => setEmail(value)}
            />
          </div>

          <div className="item">
            <img src={iconCalendar} alt="password" className="icon" />
            <InputComponent
              value={password}
              type="date"
              onChange={(value) => setPassword(value)}
            />
          </div>

          <div className="buttonSection">
            <ButtonComponent
              text="Fermer"
              onClick={() => setModalIsOpen(false)}
            />

            <ButtonComponent text="Se connecter" onClick={() => handlePost()} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
