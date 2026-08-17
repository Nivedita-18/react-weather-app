import "./ForecastCard.css";
import { getWeatherIcon } from "../utils/weatherIcons";
function ForecastCard({ forecastData }) {
  if (!forecastData) {
    return null;
  }

  const dailyForecast = forecastData.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  const hourlyForecast = forecastData.list.slice(0, 8);

  const firstFive =
    dailyForecast.length > 0
      ? dailyForecast.slice(0, 5)
      : forecastData.list.slice(0, 5);

  console.log(forecastData);

  return (
    <div className="forecast">
      <div className="hourly-section">
        <h2>⏰ Today's Hourly Forecast</h2>

        <div className="hourly-container">
          {hourlyForecast.map((item) => {
            const time = new Date(item.dt_txt).toLocaleTimeString("en-US", {
              hour: "numeric",
            });

            const icon = getWeatherIcon(item.weather[0].main);

            // const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

            return (
              <div className="hourly-card" key={item.dt}>
                <p>{time}</p>

                <div className="hourly-icon">{icon}</div>
                <h3>{Math.round(item.main.temp)}°C</h3>
              </div>
            );
          })}
        </div>
      </div>

      <h2>📅 5-Day Forecast</h2>

      <div className="forecast-container">
        {firstFive.map((item) => {
          const date = new Date(item.dt_txt);

          const day = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          const time = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          });

          const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

          const icon = getWeatherIcon(item.weather[0].main);

          return (
            <div className="forecast-card" key={item.dt}>
              <h3>{day}</h3>
              <p>{time}</p>

              <img src={iconUrl} alt={item.weather[0].description} />

              <h2>{Math.round(item.main.temp)}°C</h2>

              <p>Feels like {Math.round(item.main.feels_like)}°C</p>

              <p>
                {icon} {item.weather[0].description}
              </p>

              <p>💧 {item.main.humidity}%</p>

              <p>💨 {item.wind.speed} km/h</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastCard;
