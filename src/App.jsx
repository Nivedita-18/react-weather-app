import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import RecentSearches from "./components/RecentSearches";
import ForecastCard from "./components/ForecastCard";
import Favorites from "./components/Favorites";
import AQICard from "./components/AQICard";
import {
  getWeatherByCity,
  getWeatherByCoords,
  getForecastByCity,
  getForecastByCoords,
  getAirQuality,
} from "./services/weatherService";

const getStoredArray = (key) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const getBackground = (condition = "") => {
  const backgrounds = {
    Clear: "sunny",
    Clouds: "cloudy",
    Rain: "rainy",
    Snow: "snow",
  };

  return backgrounds[condition] || "default";
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [background, setBackground] = useState("default");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [recentSearches, setRecentSearches] = useState(() =>
    getStoredArray("recentSearches")
  );
  const [favorites, setFavorites] = useState(() => getStoredArray("favorites"));

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const loadWeatherData = async (weatherRequest, forecastRequest) => {
    setWeather(null);
    setForecastData(null);
    setAirQuality(null);
    setError("");
    setLoading(true);

    try {
      const weatherData = await weatherRequest();
      const [forecast, air] = await Promise.all([
        forecastRequest(),
        getAirQuality(weatherData.coord.lat, weatherData.coord.lon),
      ]);

      setWeather(weatherData);
      setForecastData(forecast);
      setAirQuality(air);
      setBackground(getBackground(weatherData.weather?.[0]?.main));

      return weatherData;
    } catch (requestError) {
      setError(requestError.message || "Something went wrong. Please try again.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (searchCity = city) => {
    const normalizedCity =
      typeof searchCity === "string" ? searchCity.trim() : city.trim();

    if (!normalizedCity) {
      setError("Please enter a city name.");
      return;
    }

    const data = await loadWeatherData(
      () => getWeatherByCity(normalizedCity),
      () => getForecastByCity(normalizedCity)
    );

    if (!data) return;

    setRecentSearches((previous) => [
      normalizedCity,
      ...previous.filter(
        (item) => item.toLowerCase() !== normalizedCity.toLowerCase()
      ),
    ].slice(0, 5));
  };

  const fetchWeatherByCoords = (lat, lon) =>
    loadWeatherData(
      () => getWeatherByCoords(lat, lon),
      () => getForecastByCoords(lat, lon)
    );

  const fetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setError("");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => fetchWeatherByCoords(coords.latitude, coords.longitude),
      () => setError("Unable to access your location. Please allow location access.")
    );
  };

  const searchSavedCity = (savedCity) => {
    setCity(savedCity);
    fetchWeatherByCity(savedCity);
  };

  return (
    <div className={`container ${background} ${theme}`}>
      <div className="content">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <SearchBox
          city={city}
          setCity={setCity}
          fetchWeather={fetchWeatherByCity}
          fetchCurrentLocation={fetchCurrentLocation}
          loading={loading}
        />

        <RecentSearches
          recentSearches={recentSearches}
          onSearch={searchSavedCity}
        />

        <Favorites favorites={favorites} onSearch={searchSavedCity} />

        <Loading loading={loading} />
        <ErrorMessage error={error} />

        <WeatherCard
          weather={weather}
          favorites={favorites}
          setFavorites={setFavorites}
          airQuality={airQuality}
        />

        <AQICard airQuality={airQuality} />
        <ForecastCard forecastData={forecastData} />
      </div>
    </div>
  );
}

export default App;
