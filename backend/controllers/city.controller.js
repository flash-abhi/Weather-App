import City from "../models/City.model.js";
import axios from "axios";

// Add city
export const addCity = async (req, res) => {
  try {
    const { name } = req.body;

    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.WEATHER_KEY}&units=metric`
    );

    const data = weatherRes.data;

    const city = await City.create({
      name: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].description,
      humidity: data.main.humidity,
      userId: req.user.id,
    });

    res.status(201).json(city);
  } catch (error) {
    res.status(400).json({ message: "City not found" });
  }
};

// Get all cities for logged in user
export const getCities = async (req, res) => {
  const cities = await City.find({ userId: req.user.id }).sort({
    isFavorite: -1,
  });

  res.json(cities);
};

// Toggle favorite
export const toggleFavorite = async (req, res) => {
  const city = await City.findById(req.params.id);

  if (!city)
    return res.status(404).json({ message: "City not found" });

  // strict isolation check
  if (city.userId.toString() !== req.user.id)
    return res.status(403).json({ message: "Unauthorized access" });

  city.isFavorite = !city.isFavorite;
  await city.save();

  res.json(city);
};

// Delete city
export const deleteCity = async (req, res) => {
  const city = await City.findById(req.params.id);

  if (!city)
    return res.status(404).json({ message: "City not found" });

  if (city.userId.toString() !== req.user.id)
    return res.status(403).json({ message: "Unauthorized access" });

  await city.deleteOne();

  res.json({ message: "City removed" });
};