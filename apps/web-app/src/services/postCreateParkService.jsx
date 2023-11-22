import axios from "axios";
const API_URL = "http://localhost:3001/createPark";

export const postCreateParkService = async (data) => {
  try {
    console.log("data", data);
    const fakeUser = { firstName: "user", lastName: "fake" };
    data = { ...data, user: fakeUser };
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête POST:", error);
    throw error;
  }
};
