import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import './App.css';
import { WEATHER_API_KEY } from './api';
import { WEATHER_API_URL } from './api';

function App() {
  const [currentWeather, setCurrentWeather] = React.useState(null);
  const [forecastWeather, setForecastWeather] = React.useState(null);
  const handleOnSearchChange = (searchData) => {
    const city = searchData.value;
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?q=${city}&lang=ru&units=metric&appid=${WEATHER_API_KEY}`,
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?q=${city}&lang=ru&units=metric&appid=${WEATHER_API_KEY}`,
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (resonse) => {
        const weatherResponse = await resonse[0].json();
        const forecastResponse = await resonse[1].json();
        setCurrentWeather({ name: searchData.name, ...weatherResponse });
        setForecastWeather({ name: searchData.name, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="global-container">
      <div className="container">
        <Header onSearchChange={handleOnSearchChange} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home forecastWeather={forecastWeather} currentWeather={currentWeather} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
