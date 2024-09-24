import axios from "axios";

const API_URL = "https://gamerpower.p.rapidapi.com/api/giveaways";

const options = {
  method: "GET",
  url: API_URL,
  headers: {
    "X-RapidAPI-Key": "7e3b2443aamsha3e8a57702533d2p11774ajsn0dd0ab91303a", // Replace with your actual RapidAPI key
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

export const getFreeGames = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching free games:", error);
    return [];
  }
};
