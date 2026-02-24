import express from "express";
import { weatherInsights } from "../controllers/ai.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const aiRouter = express.Router();

aiRouter.get("/insights", protect, weatherInsights);

export default aiRouter;