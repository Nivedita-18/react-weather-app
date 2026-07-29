import { formatTime } from "../utils/formatTime";
import DetailCard from "./DetailCard";
import "./WeatherCard.css";

function WeatherCard({ weather, favorites, setFavorites }) {
  if (!weather) return null;

  const sunrise = formatTime(weather.sys.sunrise);
  const sunset = formatTime(weather.sys.sunset);
  const icon = weather.weather[0].icon;
  const toggleFavorite = () => {
    const city = weather.name;

    if (favorites.includes(city)) {
      setFavorites(favorites.filter((item) => item !== city));
    } else {
      setFavorites([...favorites, city]);
    }
  };

  return (
    <div className="weather-card">
      <h2>
        📍 {weather.name}, {weather.sys.country}
        <span
          onClick={toggleFavorite}
          style={{
            cursor: "pointer",
            marginLeft: "12px",
          }}
        >
          {favorites.includes(weather.name) ? "⭐" : "☆"}
        </span>
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="Weather"
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <h3>{weather.weather[0].description}</h3>

      <div className="details-grid">
        <DetailCard
          icon="🤗"
          title="Feels Like"
          value={`${Math.round(weather.main.feels_like)}°C`}
        />

        <DetailCard
          icon="💧"
          title="Humidity"
          value={`${weather.main.humidity}%`}
        />

        <DetailCard
          icon="💨"
          title="Wind"
          value={`${weather.wind.speed} m/s`}
        />

        <DetailCard
          icon="📊"
          title="Pressure"
          value={`${weather.main.pressure} hPa`}
        />

        <DetailCard icon="🌅" title="Sunrise" value={sunrise} />

        <DetailCard icon="🌇" title="Sunset" value={sunset} />
      </div>
    </div>
  );
}

export default WeatherCard;
