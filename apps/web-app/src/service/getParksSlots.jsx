import axios from "axios";
const API_URL = "http://localhost:3001/createPark";

export const getParksSlots = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
    console.log(response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête POST:", error);
    throw error;
  }
};
