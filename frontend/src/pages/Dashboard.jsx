import { useEffect, useState } from "react";
import { addCity, getCities , toggleFavorite } from "../services/cityServices";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import CityCard from '../components/CityCard';

const Dashboard = () => {
  const [cities, setCities] = useState([]);
  const [city,setCity] = useState(null);

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

  const handleAllCities = async() => {
    try {
      const res = await getCities();

      setCities(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFavouriteCities = async ()=> {
    try {
     const favourite = cities.filter((city) => city.isFavorite);
     setCities(favourite);
    } catch (error) {
      console.log(error);
    }
  }

  const handleToggleFavorite = async (id) => {
  try {
    // console.log(id);
    const updated = await toggleFavorite(id);
    setCities((prev) =>
      prev.map((city) =>
        city._id === id ? updated.data : city
    ));

  } catch (error) {
    toast.error("Failed to update favorite");
  }
};

  const handleAddCity = async()=>{
    try {
      console.log(addCity);
      const result = await addCity(city);
      console.log(result);
      setCities((prev) => [...prev,result.data]);
    } catch (error) {
      
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-green-50">
           <Navbar />
      </div>
      
      {/* filters */}
      <div className=" py-9 flex flex-wrap gap-6 items-center justify-center">
       <div className="flex items-center justify-center gap-4">
        <button onClick={() => handleAllCities()} className="bg-linear-to-bl cursor-pointer from-green-400 to-green-600 px-4 font-bold py-2 rounded-2xl text-white">All Citys</button>
        <button onClick={() => handleFavouriteCities()} className="bg-linear-to-bl cursor-pointer  from-green-400 to-green-600 px-4 font-bold py-2 rounded-2xl text-white">Favourite</button>
       </div>
        <div className="flex items-center gap-1">
          <input type="text" value={city || ""} onChange={(e) => setCity(e.target.value)} placeholder="city.." className="border focus:outline-2 text-gray-700 font-bold focus:outline-green-600 px-4 py-2 rounded-2xl " /> 
          <button onClick={handleAddCity} className="px-2 py-2  font-bold rounded-2xl w-20 bg-linear-to-br text-white from-green-600  to-green-500 cursor-pointer">Add</button>
        </div>
      </div>
      {/* Cities card */}
      <div className="max-w-8xl mx-20">
        <div className="flex  py-2 flex-wrap justify-center items-center gap-10">
        {cities.map((city) => <CityCard onToggleFavorite={handleToggleFavorite} city={city} />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;