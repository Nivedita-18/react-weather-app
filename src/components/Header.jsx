function Header({ theme, toggleTheme }) {
  return (
    <header>
      <h1>🌦 Weather App</h1>

      <button onClick={toggleTheme} className="theme-btn">
        <span className="theme-icon">{theme === "light" ? "🌙" : "☀️"}</span>

        <span className="theme-text">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </button>

      <p>Check the weather of any city instantly</p>

      <p className="developer">
        Developed by <strong>Nivedita</strong>
      </p>
    </header>
  );
}

export default Header;
