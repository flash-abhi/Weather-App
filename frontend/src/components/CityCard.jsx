import { motion } from "framer-motion";
import {
  FaStar,
  FaTemperatureLow,
  FaTint,
  FaCloudSun,
  FaWind,
} from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CityCard = ({ city , onToggleFavorite  }) => {
  const getWeatherIcon = () => {
    if (city.weather?.toLowerCase().includes("cloud"))
      return <FaCloudSun className="text-yellow-400 text-7xl" />;
    if (city.weather?.toLowerCase().includes("rain"))
      return <FaTint className="text-blue-400 text-4xl" />;
    return <FaCloudSun className="text-green-400 text-8xl" />;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01   }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative w-72 p-6 rounded-3xl backdrop-blur-lg 
      bg-gradient-to-br from-green-100 via-white to-green-50
      shadow-xl border border-green-200 overflow-hidden"
    >
      {/* Favorite Icon */}
      <motion.div
        onClick={() => onToggleFavorite(city._id)}
        whileTap={{ scale: 1.3 }}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <FaStar
          className={`text-2xl transition ${
            city?.isFavorite ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      </motion.div>

      {/* City Name */}
      <h2 className="text-3xl font-bold text-green-700 mb-2">
        {city.name}
      </h2>

      {/* Weather Icon */}
      <div className="flex justify-center my-4">
        {getWeatherIcon()}
      </div>

      {/* Temperature */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex items-center justify-center gap-2 text-3xl font-semibold text-gray-700"
      >
        <FaTemperatureLow className="text-red-400" />
        {city.temperature}°C
      </motion.div>

      {/* Humidity & Weather */}
      <div className="mt-4 space-y-2 text-gray-600 font-medium">
        <div className="flex items-center gap-4">
          <FaTint className="text-blue-400 text-2xl" />
          Humidity: {city.humidity}%
        </div>

        <div className="flex items-center gap-4">
          <FaWind className="text-gray-400 text-2xl" />
          Weather: {city.weather}
        </div>
      </div>
      
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="mt-6 w-full bg-green-500 hover:bg-green-600
        text-white font-semibold py-2 rounded-xl shadow-md text-lg
        transition duration-300 cursor-pointer flex items-center justify-center gap-2"
      >
        Remove <RiDeleteBin5Fill className="text-xl font-bold"/>
      </motion.button>
    </motion.div>
  );
};

export default CityCard;