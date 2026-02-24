import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cityRoutes from "./routes/city.route.js";
import aiRoutes from "./routes/ai.route.js";
import { connectDb } from "./utils/db.js";

dotenv.config();

const app = express();
const Port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/ai", aiRoutes);

app.listen(Port, () => {
    console.log("Server Running on Port ",Port);
    connectDb();
})
