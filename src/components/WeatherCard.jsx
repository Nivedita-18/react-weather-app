import { formatTime } from "../utils/formatTime";
function WeatherCard({ weather }) {
  if (!weather) return null;
  const sunrise = formatTime(weather.sys.sunrise);

  const sunset = formatTime(weather.sys.sunset);
  const icon = weather.weather[0].icon;

  return (
    <div className="weather-card">
      <h2>
        📍 {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="Weather"
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <h3>{weather.weather[0].description}</h3>

      <div className="weather-grid">
        <div className="info-box">
          <span>💧</span>
          <h4>Humidity</h4>
          <p>{weather.main.humidity}%</p>
        </div>

        <div className="info-box">
          <span>🌬</span>
          <h4>Wind</h4>
          <p>{weather.wind.speed} m/s</p>
        </div>

        <div className="info-box">
          <span>🌅</span>
          <h4>Sunrise</h4>
          <p>{sunrise}</p>
        </div>

        <div className="info-box">
          <span>🌇</span>
          <h4>Sunset</h4>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
