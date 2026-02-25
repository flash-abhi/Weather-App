import { useEffect, useState } from "react";
import {
  getCities,
} from "../services/cityServices";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import CityCard from "../components/CityCard";
import { getWeatherInsights } from "../services/aiService";
import { FaCity, FaCloudSun, FaPlusCircle, FaRobot, FaStar } from "react-icons/fa";
import { handleAddCity, handleAllCities, handleFavouriteCities, handleRemoveCity, handleToggleFavorite } from "../custom/cityFunction";
import AiCard from "../components/AiCard";
import { PiSpinner } from "react-icons/pi";
const Dashboard = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [insights, setInsights] = useState([]);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [loadingAdd,setLoadingAdd] = useState(false);
  const fetchInsights = async () => {
    try {
      setLoadingInsights(true);
      const res = await getWeatherInsights();
      setInsights(res.data.summaries || []);
    } catch (error) {
      toast.error("Failed to fetch AI insights");
    } finally {
      setLoadingInsights(false);
    }
  };
  const fetchCities = async () => {
    try {
      const res = await getCities();
      setCities(res.data);
    } catch {
      toast.error("Failed to fetch cities");
    }
  };
  useEffect(() => {
    fetchCities();
  }, []);

 
  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50 to-white">

    <Navbar />

    {/* HERO SECTION */}
    <section className="text-center py-16 px-4">
      <div className="flex justify-center mb-4">
        <FaCloudSun className="text-5xl text-emerald-500 drop-shadow-lg" />
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
        Smart Weather Advice
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Monitor cities in real-time and unlock AI-powered insights that help you
        make smarter daily decisions.
      </p>
    </section>

    {/* favourite */}
    <section className="max-w-6xl mx-auto px-4 mb-16">
      <div className="bg-white shadow-2xl rounded-3xl p-8 backdrop-blur-md border border-gray-100">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleAllCities(setCities)}
              className="flex items-center cursor-pointer gap-2 px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 shadow-lg hover:scale-105 transition"
            >
              <FaCity />
              All Cities
            </button>

            <button
              onClick={() => handleFavouriteCities(cities,setCities)}
              className="flex items-center cursor-pointer gap-2 px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:scale-105 transition"
            >
              <FaStar />
              Favorites
            </button>
          </div>

          {/* Add City */}
          <div className="flex gap-3 w-full sm:w-auto">
            <input
              type="text"
              value={city || ""}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search a city..."
              className="px-5 py-3 rounded-2xl border-2 border-emerald-200 focus:outline-none focus:border-emerald-500 shadow-sm w-full sm:w-64"
            />

           <button
              onClick={() => {handleAddCity(setCities,city,setCity,setLoadingAdd)}}
              className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg hover:scale-105 transition"
            >{
              loadingAdd? <PiSpinner className="animate-spin text-2xl" />:
              <div className="flex gap-2 items-center">
                <FaPlusCircle />
                Add
              </div>
              }
            </button>
          </div>

        </div>
      </div>
    </section>

    {/* AI section */}
    <section className="max-w-6xl mx-auto px-4 mb-20">

      <div className="flex justify-center lg:justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <FaRobot className="text-3xl text-green-600" />
          <h2 className="text-3xl font-bold text-green-600">
            Ai advise For your cities
          </h2>
        </div>

        <button
          onClick={fetchInsights}
          className="flex items-center cursor-pointer gap-2 px-6 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:scale-105 transition"
        >
          <FaRobot />
          Check Weather
        </button>
      </div>

      {loadingInsights && (
        <div className="text-center py-10 text-gray-500 animate-pulse">
          AI is analyzing patterns...
        </div>
      )}

      {!loadingInsights && insights.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <AiCard key={index} item={item}/>
          ))}
        </div>
      )}
    </section>

    {/* city card */}
<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">

  <div className="text-center mb-14">
    <h2 className="text-4xl font-bold text-green-600">
      Your Added Cities
    </h2>
    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
      Track and manage all your cities in one intelligent dashboard.
    </p>
  </div>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-10
      place-items-center
    "
  >
    {cities.map((city) => (
      <CityCard
        key={city._id}
        removeCity={handleRemoveCity}
        setCities={setCities}
        onToggleFavorite={handleToggleFavorite}
        city={city}
      />
    ))}
  </div>
</section>
  </div>
);
};

export default Dashboard;
