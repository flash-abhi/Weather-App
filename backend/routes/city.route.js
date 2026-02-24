import express from "express";
import {
  addCity,
  getCities,
  toggleFavorite,
  deleteCity,
} from "../controllers/city.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const cityRouter = express.Router();

cityRouter.post("/", protect, addCity);
cityRouter.get("/", protect, getCities);
cityRouter.put("/:id/favorite", protect, toggleFavorite);
cityRouter.delete("/:id", protect, deleteCity);

export default cityRouter;