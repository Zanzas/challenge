import axios from "axios";
const API_URL = "http://localhost:3001/createPark";

export const postParkSlot = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête POST:", error);
    throw error;
  }
};
