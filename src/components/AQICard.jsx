import "./AQICard.css";

function AQICard({ airQuality }) {
  if (!airQuality) return null;

  const aqi = airQuality.list[0].main.aqi;

  const status = [
    "",
    "🟢 Good",
    "🟡 Fair",
    "🟠 Moderate",
    "🔴 Poor",
    "🟣 Very Poor",
  ];

  const description = [
    "",
    "Air quality is excellent.",
    "Air quality is satisfactory.",
    "Sensitive people should take care.",
    "Limit prolonged outdoor activity.",
    "Avoid outdoor exposure if possible.",
  ];

  const progress = (aqi / 5) * 100;

  return (
    <div className="aqi-card">
      <h2>🌫 Air Quality</h2>

      <h3>{status[aqi]}</h3>

      <p>AQI Level: {aqi} / 5</p>

      <p>{description[aqi]}</p>

      <div className="aqi-progress">
        <div
          className="aqi-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default AQICard;
