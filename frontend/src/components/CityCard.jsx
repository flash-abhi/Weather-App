import { motion } from "framer-motion";
import {
  FaStar,
  FaTemperatureHigh,
  FaTint,
  FaCloudSun,
  FaWind,
} from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CityCard = ({ city, setCities, onToggleFavorite, removeCity }) => {
  const getWeatherIcon = () => {
    if (city.weather?.toLowerCase().includes("cloud"))
      return <FaCloudSun className="text-yellow-400 text-6xl drop-shadow-xl" />;
    if (city.weather?.toLowerCase().includes("rain"))
      return <FaTint className="text-blue-400 text-6xl drop-shadow-xl" />;
    return <FaCloudSun className="text-emerald-500 text-6xl drop-shadow-xl" />;
  };

  return (
    <motion.div
      transition={{ type: "spring", stiffness: 150 }}
      className="relative w-[350px] p-6 rounded-3xl
      bg-white/70 backdrop-blur-xl
      border border-white/40
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
      transition-all duration-300"
    >
      {/* Favorite */}
      <motion.div
        whileTap={{ scale: 1.3 }}
        onClick={() => onToggleFavorite(city._id, setCities)}
        className="absolute top-5 right-5 cursor-pointer z-10"
      >
        <FaStar
          className={`text-xl transition ${
            city?.isFavorite
              ? "text-yellow-400 drop-shadow-md"
              : "text-gray-300 "
          }`}
        />
      </motion.div>

      {/* City Name */}
      <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
        {city.name}
      </h2>

      {/* Weather Icon */}
      <div className="flex justify-center my-6">
        {getWeatherIcon()}
      </div>

      {/* Temperature */}
      <div className="flex items-center justify-center gap-3 text-4xl font-bold text-gray-900">
        <FaTemperatureHigh className="text-red-400 text-2xl" />
        {city.temperature}°C
      </div>

      {/* Divider */}
      <div className="my-6 h-[1px] bg-gray-200" />

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex flex-col items-center bg-white rounded-xl py-3 shadow-sm">
          <FaTint className="text-blue-400 text-lg mb-1" />
          <span className="text-gray-600">Humidity</span>
          <span className="font-semibold text-gray-800">
            {city.humidity}%
          </span>
        </div>

        <div className="flex flex-col items-center bg-white rounded-xl py-3 shadow-sm">
          <FaWind className="text-gray-400 text-lg mb-1" />
          <span className="text-gray-600">Condition</span>
          <span className="font-semibold text-gray-800 capitalize">
            {city.weather}
          </span>
        </div>
      </div>

      {/* Remove Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => removeCity(city._id, setCities)}
        className="mt-7 w-full py-3 rounded-xl
        bg-gradient-to-r from-emerald-500 to-green-600
        hover:from-green-600 hover:to-emerald-700
        text-white font-semibold cursor-pointer z-50
        shadow-md transition duration-300
        flex items-center justify-center gap-2"
      >
        Remove
        <RiDeleteBin6Line className="text-lg" />
      </motion.button>
    </motion.div>
  );
};

export default CityCard;