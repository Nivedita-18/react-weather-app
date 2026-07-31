import "./AQICard.css";

function AQICard({ airQuality }) {
  if (!airQuality) return null;

  const aqi = airQuality.list[0].main.aqi;

  const status = ["", "Good", "Fair", "Moderate", "Poor", "Very Poor"];
  const description = [
    "",
    "Air quality is excellent.",
    "Air quality is satisfactory.",
    "Sensitive people should take care.",
    "Limit prolonged outdoor activity.",
    "Avoid outdoor exposure if possible.",
  ];

  const colors = {
    1: "#22c55e", // Good
    2: "#facc15", // Fair
    3: "#f59e0b", // Moderate
    4: "#ef4444", // Poor
    5: "#9333ea", // Very Poor
  };

  const icons = {
    1: "🍃",
    2: "🌤️",
    3: "🌫️",
    4: "😷",
    5: "☣️",
  };

  const icon = icons[aqi];

  const color = colors[aqi];

  const progress = (aqi / 5) * 100;

  return (
    <div className="aqi-card">
      <h2>🌫 Air Quality</h2>

      <div className="aqi-content">
        <div className="aqi-icon">{icon}</div>done

        <div className="aqi-info">
          <h3 style={{ color }}>{status[aqi]}</h3>

          <p className="aqi-level">
            AQI Level:
            <span style={{ color }}> {aqi} / 5</span>
          </p>

          <p className="aqi-description">{description[aqi]}</p>
        </div>
      </div>

      <div className="aqi-progress">
        <div
          className="aqi-progress-fill"
          style={{
            width: `${progress}%`,
            background: color,
          }}
        ></div>
      </div>
    </div>
  );
}

export default AQICard;
