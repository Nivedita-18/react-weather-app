# 🌦️ Weatherly — React Weather Dashboard

<p align="center">
  <strong>A modern, responsive weather dashboard built with React + Vite and powered by the OpenWeather API.</strong>
</p>

<p align="center">
  <a href="https://react-weather-app-beta-dusky.vercel.app/">🚀 Live Demo</a>
  ·
  <a href="https://github.com/Nivedita-18/react-weather-app">📦 Source Code</a>
</p>

---

## ✨ Features

- 🔍 Search weather by city
- 📍 Current-location weather
- 🌡️ Current temperature and conditions
- 🕒 Hourly forecast
- 📅 5-day forecast
- 🌫️ Air Quality Index (AQI)
- ⭐ Favorite cities
- 🕘 Recent searches
- 🌙 Light / Dark mode
- 🎨 Dynamic weather backgrounds
- 📱 Responsive mobile, tablet and desktop UI
- ⚠️ Loading and error states

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ React | Component-based UI |
| ⚡ Vite | Development and production tooling |
| 🟨 JavaScript | Application logic |
| 🎨 CSS3 | Responsive styling, themes and animations |
| 🌤️ OpenWeather API | Weather and air-quality data |
| 💾 localStorage | Favorites, recent searches and theme persistence |
| 📍 Geolocation API | Current-location weather |

## 📸 Preview

> Add screenshots here after capturing the final dashboard. Recommended files:
> `screenshots/dashboard.png`, `screenshots/dark-mode.png`, `screenshots/mobile.png`

## 🚀 Live Demo

**Try the app:** https://react-weather-app-beta-dusky.vercel.app/

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── services/       # API/service layer
├── styles/         # Component-specific styles
├── utils/          # Weather and formatting helpers
├── App.jsx         # Main application
├── index.css       # Global responsive styling
└── main.jsx        # React entry point
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Nivedita-18/react-weather-app.git
cd react-weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API key

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key_here
```

You can use `.env.example` as a template.

> 🔐 Never commit `.env` or expose a real API key in source control.

### 4. Run locally

```bash
npm run dev
```

Open the local URL shown by Vite.

### 5. Build for production

```bash
npm run build
```

## 🎯 What I Learned

- Building reusable React components
- Managing API-driven state
- Working with asynchronous API requests
- Handling loading and error states
- Using browser geolocation
- Persisting data with localStorage
- Creating responsive layouts with CSS Grid and media queries
- Implementing light/dark themes
- Creating dynamic weather-based UI
- Organizing a frontend project for maintainability

## 🔮 Future Improvements

- 🌡️ Celsius / Fahrenheit switcher
- 📈 Temperature trend charts
- 🌅 Sunrise and sunset visualization
- 🗺️ Weather map integration
- 🔔 Weather alerts and notifications
- ♿ Improved accessibility and keyboard navigation

## 👩‍💻 Author

**Nivedita**

Frontend project created to practice **React, API integration, responsive UI and modern frontend development**.

---

<p align="center">Made with ❤️ using React</p>
