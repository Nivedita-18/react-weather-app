const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const buildUrl = (endpoint, params = {}, includeMetricUnits = true) => {
  const query = {
    ...params,
    appid: apiKey,
  };

  if (includeMetricUnits) {
    query.units = "metric";
  }

  const searchParams = new URLSearchParams(
    Object.entries(query).filter(([, value]) => value !== undefined && value !== null)
  );

  return `https://api.openweathermap.org/data/2.5/${endpoint}?${searchParams}`;
};

const fetchWeatherData = async (endpoint, params, includeMetricUnits = true) => {
  const response = await fetch(buildUrl(endpoint, params, includeMetricUnits));
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Weather service request failed");
  }

  return data;
};

export function getWeatherByCity(city) {
  return fetchWeatherData("weather", { q: city.trim() });
}

export function getWeatherByCoords(lat, lon) {
  return fetchWeatherData("weather", { lat, lon });
}

export function getForecastByCity(city) {
  return fetchWeatherData("forecast", { q: city.trim() });
}

export function getForecastByCoords(lat, lon) {
  return fetchWeatherData("forecast", { lat, lon });
}

export function getAirQuality(lat, lon) {
  return fetchWeatherData("air_pollution", { lat, lon }, false);
}
