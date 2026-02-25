import API from "./api";

export const getCities = () => API.get("/cities");

export const addCity = (name) =>
  API.post("/cities", { name });

export const deleteCity = (id) =>
  API.delete(`/cities/${id}`);

export const toggleFavorite = (id) =>
  API.put(`/cities/${id}/favorite`);