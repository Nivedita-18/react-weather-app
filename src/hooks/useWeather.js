import { useState } from "react";

export function useWeather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading] = useState(false);
  const [background, setBackground] = useState("default");

  return {
    city,
    setCity,
    weather,
    error,
    loading,
    background,
    setWeather,
    setError,
    setBackground,
  };
}
