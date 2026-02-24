import express from "express";
import { getCurrentUser, loginUser, logout, registerUser } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const Authrouter = express.Router();

Authrouter.post("/register", registerUser);
Authrouter.post("/login", loginUser);
Authrouter.post("/logout",logout);
Authrouter.get("/me",protect,getCurrentUser);
export default Authrouter; 