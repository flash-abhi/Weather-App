import axios from "axios";

const API = axios.create({
  baseURL: "https://weather-app-backend-tc14.onrender.com/api",
  withCredentials: true,
});

export default API;
