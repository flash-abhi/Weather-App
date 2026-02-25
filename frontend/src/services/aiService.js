import API from "./api";

export const getWeatherInsights = async () => {
  return API.get("/ai/insights");
};