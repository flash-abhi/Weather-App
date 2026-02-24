import City from "../models/City.model.js";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

export const weatherInsights = async (req, res) => {
  try {
    const cities = await City.find({ userId: req.user.id });

    if (!cities.length) {
      return res.json({ insight: "No cities found." });
    }

    const weatherData = cities
      .map(
        (c) =>
          `${c.name}: ${c.temperature}°C, ${c.weather}, humidity ${c.humidity}%`
      )
      .join("\n");

    const model = new ChatOpenAI({
      model: "gpt-4o-mini", // CHEAP + recommended for students
      temperature: 0.7,
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    const response = await model.invoke([
      new HumanMessage(
        `Based on this weather data:\n${weatherData}\nGive smart advice in 3 short lines.`
      ),
    ]);

    res.json({ insight: response.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};