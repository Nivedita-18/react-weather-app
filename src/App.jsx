import { useWeather } from "./hooks/useWeather";
import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import {
  getWeatherByCity,
  getWeatherByCoords,
} from "./services/weatherService";

function App() {
  // const [city, setCity] = useState("");
  // const [weather, setWeather] = useState(null);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [background, setBackground] = useState("default");
  const { city, setCity, weather, error, loading, background } = useWeather();
  
  const updateWeatherState = (data) => {
    if (data.cod !== 200) {
      setError(data.message);
      setWeather(null);
      setWeather(null);
      return false;
    }
    setError("");
    setWeather(data);
    return true;
  };
  const fetchWeatherByCity = async () => {
    if (!city.trim()) return;
    setWeather(null);
    setError("");
    setLoading(true);

    try {
      const data = await getWeatherByCity(city);
      const success = updateWeatherState(data);

      if (!success) {
        setLoading(false);
        return;
      }
      const condition = data.weather[0].main;

      if (condition === "Clear") {
        setBackground("sunny");
      } else if (condition === "Clouds") {
        setBackground("cloudy");
      } else if (condition === "Rain") {
        setBackground("rainy");
      } else if (condition === "Snow") {
        setBackground("snow");
      } else {
        setBackground("default");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    setWeather(null);
    setError("");
    setLoading(true);

    try {
      const data = await getWeatherByCoords(lat, lon);

      const success = updateWeatherState(data);

      if (!success) {
        setLoading(false);
        return;
      }

      setError("");
      setWeather(data);

      const condition = data.weather[0].main;

      if (condition === "Clear") {
        setBackground("sunny");
      } else if (condition === "Clouds") {
        setBackground("cloudy");
      } else if (condition === "Rain") {
        setBackground("rainy");
      } else if (condition === "Snow") {
        setBackground("snow");
      } else {
        setBackground("default");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  const fetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetchWeatherByCoords(lat, lon);
    });
  };

  return (
    <div className={`container ${background}`}>
      <Header />

      <SearchBox
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeatherByCity}
        fetchCurrentLocation={fetchCurrentLocation}
      />
      <Loading loading={loading} />
      <ErrorMessage error={error} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
