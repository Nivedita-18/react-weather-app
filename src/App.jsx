import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import RecentSearches from "./components/RecentSearches";
import {
  getWeatherByCity,
  getWeatherByCoords,
  getForecastByCity,
} from "./services/weatherService";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [background, setBackground] = useState("default");
  const [theme, setTheme] = useState("light");
  const [forecastData, setForecastData] = useState(null);

  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem("recentSearches");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const updateWeatherState = (data) => {
    if (data.cod !== 200) {
      setError(data.message);
      setWeather(null);
      return false;
    }
    setError("");
    setWeather(data);
    return true;
  };

  const fetchWeatherByCity = async (searchCity = city) => {
    if (typeof searchCity !== "string") {
      searchCity = city;
    }

    if (!searchCity.trim()) return;

    setWeather(null);
    setError("");
    setLoading(true);

    try {
      const data = await getWeatherByCity(searchCity);
      const forecast = await getForecastByCity(searchCity);

      console.log(forecast);

      setForecastData(forecast);

      const success = updateWeatherState(data);

      if (!success) {
        setLoading(false);
        return;
      }

      setRecentSearches((prev) => {
        const updated = [
          searchCity,
          ...prev.filter((item) => item !== searchCity),
        ];

        return updated.slice(0, 5);
      });

      setLoading(false);
    } catch (error) {
      setError("Something went wrong. Please try again.");
      setWeather(null);
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
    <div className={`container ${background} ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <SearchBox
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeatherByCity}
        fetchCurrentLocation={fetchCurrentLocation}
      />
      <RecentSearches
        recentSearches={recentSearches}
        onSearch={(searchCity) => {
          setCity(searchCity);
          fetchWeatherByCity(searchCity);
        }}
      />
      <Loading loading={loading} />
      <ErrorMessage error={error} />
      <WeatherCard weather={weather} />

      <ForecastCard forecastData={forecastData} />
    </div>
  );
}

export default App;
