import "../styles/favorites.css";

function Favorites({ favorites, onSearch }) {
  if (favorites.length === 0) return null;

  return (
    <div className="favorites">
      <h3>⭐ Favourite Cities</h3>

      <div className="favorite-list">
        {favorites.map((city) => (
          <button
            key={city}
            className="favorite-btn"
            onClick={() => onSearch(city)}
          >
            ⭐ {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
