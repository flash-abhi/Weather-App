import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  temperature: Number,
  weather: String,
  humidity: Number,
  isFavorite: { type: Boolean, default: false },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

const City = mongoose.model("City", citySchema);
export default City;