function SearchBox({ city, setCity, fetchWeather, fetchCurrentLocation }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search any city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchWeather();
          }
        }}
      />

      <button onClick={fetchWeather}>🔍 Search</button>

      <div className="divider">
        <span>OR</span>
      </div>

      <button className="location-btn" onClick={fetchCurrentLocation}>
        📍 Use Current Location
      </button>
    </div>
  );
}

export default SearchBox;
