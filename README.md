# 🌦️ Weather App

A modern, responsive weather dashboard built with **React + Vite** and powered by the **OpenWeather API**.

🔗 **Live Demo:** https://react-weather-app-beta-dusky.vercel.app/

## ✨ Features

- 🔍 Search weather by city
- 📍 Use current location
- 🌡️ Current temperature and conditions
- 🕒 Hourly forecast
- 📅 5-day forecast
- 🌫️ Air Quality Index (AQI)
- ⭐ Favorite cities
- 🕘 Recent searches
- 🌙 Light / Dark mode
- 🎨 Dynamic weather backgrounds and icons
- 📱 Responsive design for mobile, tablet and desktop
- ⚠️ Loading and error states

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI and component-based architecture |
| Vite | Development and build tooling |
| JavaScript | Application logic |
| CSS3 | Responsive styling and themes |
| OpenWeather API | Weather and air-quality data |

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── services/       # API/service layer
├── styles/         # Component-specific styles
├── utils/          # Formatting, icons and weather helpers
├── App.jsx         # Main application
└── main.jsx        # React entry point
```

## 🚀 Getting Started

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

> Never commit `.env` or expose your API key in source control.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## 🎯 What I Learned

- Building reusable React components
- Managing API-driven application state
- Creating custom hooks for data fetching
- Handling loading, errors and empty states
- Working with browser geolocation
- Persisting favorites and recent searches
- Building responsive and theme-aware interfaces
- Structuring a React project for maintainability

## 👩‍💻 Author

**Nivedita**

Built as a frontend project to practice React, API integration and responsive UI development.
