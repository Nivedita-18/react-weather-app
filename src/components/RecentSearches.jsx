import "../styles/recentSearches.css";

function RecentSearches({ recentSearches, onSearch }) {
  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="recent-searches">
      <h3>🕘 Recently Searched Cities</h3>
      {recentSearches.map((search) => (
        <button
          className="recent-btn"
          key={search}
          onClick={() => onSearch(search)}
        >
          {search}
        </button>
      ))}
    </div>
  );
}

export default RecentSearches;
