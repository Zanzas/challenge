import axios from "axios";
const API_URL = "http://localhost:3001/createPark";

export const postParkSlot = async (data) => {
  try {
    const fakedate = { firstName: "alex", lastName: "thomas" };
    const response = await axios.post(API_URL, fakedate);
    return response.fakedate;
  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête POST:", error);
    throw error;
  }
};
