import toast from "react-hot-toast";
import {
    addCity,
  deleteCity,
  getCities,
  toggleFavorite,
} from "../services/cityServices";

export const handleAddCity = async (setCities,city,setCity) => {
  try {
    if (!city) return;
    const newCityName = city.charAt(0).toUpperCase() + city.slice(1);
    const result = await addCity(newCityName);
    setCities((prev) => {
      const exists = prev.find((c) => c._id === result.data._id);
      if (exists) {
        return prev.map((c) => (c._id === result.data._id ? result.data : c));
      } else {
        return [...prev, result.data];
      }
    });
    setCity("");
    toast.success("City added successfully");
  } catch (error) {
    setCity("");
    toast.error("Failed to add city");
  }
};

export const handleToggleFavorite = async (id, setCities) => {
  try {
    // console.log(id);
    const updated = await toggleFavorite(id);
    setCities((prev) =>
      prev.map((city) => (city._id === id ? updated.data : city)),
    );
  } catch (error) {
    console.log(error);
    toast.error("Failed to update favorite");
  }
};

export const handleRemoveCity = async (id, setCities) => {
  try {
    // console.log(id);
    const deleted = await deleteCity(id);
    // console.log(deleted);
    setCities((prev) => prev.filter((city) => city._id != id));
    toast.success("City Removed");
  } catch (error) {
    toast.error("Failed to delete city");
  }
};

export const handleAllCities = async (setCities) => {
  try {
    const res = await getCities();
    setCities(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const handleFavouriteCities = async (cities, setCities) => {
  try {
    const favourite = cities.filter((city) => city.isFavorite);
    setCities(favourite);
  } catch (error) {
    console.log(error);
  }
};
