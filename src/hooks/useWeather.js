import { useState } from "react";
import {
  getWeatherByCity,
  getWeatherByCoords,
} from "../services/weatherService";

import { getBackground } from "../utils/weatherBackground";

export function useWeather() {
    
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [background, setBackground] = useState("default");
  const updateWeatherState = (data) => {

  if (data.cod !== 200) {
    setError(data.message);
    setWeather(null);
    return false;
  }

  setError("");
  setWeather(data);

  const condition = data.weather[0].main;
  setBackground(getBackground(condition));

  return true;

};

  return {
    city,
    setCity,
    weather,
    error,
    loading,
    background,
  };
}