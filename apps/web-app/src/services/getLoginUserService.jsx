import axios from "axios";
const API_URL = "http://localhost:3001/users";

export const getParks = async (data) => {
  try {
    const response = await axios.get(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête GET:", error);
    throw error;
  }
};
