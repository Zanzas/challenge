import React, { useState } from "react";
import Modal from "react-modal";

import "./profil.css";
import ButtonComponent from "../tools/button/button";
import { postCreateParkService } from "../../services/postCreateParkService";

const Profil = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePost = async () => {
    const data = {
      username,
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
        text="Mon Profil"
        onClick={() => setModalIsOpen(true)}
      />

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="container addContainer">
          <h2 className="title">Mon Profil</h2>
        </div>
      </Modal>
    </div>
  );
};

export default Profil;
