import City from "../models/City.model.js";
import { ChatOpenAI } from "@langchain/openai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";

export const weatherInsights = async (req, res) => {
  try {
    const cities = await City.find({ userId: req.user.id });

    if (!cities.length) {
      return res.json({
        summary: "No cities added yet.",
        advice: "Add cities to receive weather insights.",
        alerts: []
      });
    }

    const sortedCities = cities.sort(
      (a, b) => b.isFavorite - a.isFavorite
    );

    const weatherContext = sortedCities
      .map(
        (c) =>
          `City: ${c.name}
Temperature: ${c.temperature}°C
Condition: ${c.weather}
Humidity: ${c.humidity}%
Favorite: ${c.isFavorite ? "Yes" : "No"}`
      )
      .join("\n\n");

    const model = new ChatOpenAI({
      model: "gpt-4o-mini", // cheaper + stable
      temperature: 0.4,
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    const response = await model.invoke([
      new SystemMessage(`
You are a professional Weather Intelligence Assistant.

Return STRICT JSON:
{
  "summaries":[
  {
  "city": "...",
  "summary":"...",
  "advice": "...",
  "alerts": []
  },
  ],
 
}

Rules:
- Prioritize favorite cities
- Temperature > 35°C = heat alert
- Temperature < 5°C = cold alert
- Humidity > 80% = humidity alert
- No markdown
- No explanation outside JSON
`),
      new HumanMessage(`
Weather Data:

${weatherContext}
`)
    ]);

    let parsed;
    try {
      parsed = JSON.parse(response.content);
    } catch {
      parsed = {
        summary: response.content,
        advice: "Formatting issue",
        alerts: []
      };
    }

    res.json(parsed);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};