import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const Authrouter = express.Router();

Authrouter.post("/register", registerUser);
Authrouter.post("/login", loginUser);

export default Authrouter;