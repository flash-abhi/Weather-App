import express from "express";
import { getCurrentUser, loginUser, registerUser } from "../controllers/auth.controller.js";

const Authrouter = express.Router();

Authrouter.post("/register", registerUser);
Authrouter.post("/login", loginUser);
Authrouter.get("/me",getCurrentUser);
export default Authrouter; 