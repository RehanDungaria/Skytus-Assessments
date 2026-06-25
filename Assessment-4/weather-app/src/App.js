import React, { useState } from "react";
import "./App.css";

function App() {
  const API_KEY = "04466fc658c346aca3c81102262501";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (query) => {
    if (!query.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=7&aqi=yes`
      );

      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
        return;
      }

      setWeather(data);
      setForecast(data.forecast.forecastday);
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };
{!weather && !loading && (
  <div className="welcome">
    <h2>🌤 Weather Dashboard</h2>
    <p>Search for a city or use GPS to view weather.</p>
  </div>
)}
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(
        `${position.coords.latitude},${position.coords.longitude}`
      );
    });
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && getWeather(city)
          }
        />

        <button onClick={() => getWeather(city)}>
          Search
        </button>

        <button onClick={getCurrentLocation}>
          GPS
        </button>
      </div>

      {loading && <h2>Loading...</h2>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <>
          <div className="weather-card">
            <img
              src={`https:${weather.current.condition.icon}`}
              alt=""
            />

            <h2>
              {weather.location.name},
              {weather.location.country}
            </h2>

            <h1>{weather.current.temp_c}°C</h1>

            <p>{weather.current.condition.text}</p>
          </div>

          <div className="details">
            <div className="box">
              <h3>Humidity</h3>
              <p>{weather.current.humidity}%</p>
            </div>

            <div className="box">
              <h3>Wind</h3>
              <p>{weather.current.wind_kph} km/h</p>
            </div>

            <div className="box">
              <h3>UV Index</h3>
              <p>{weather.current.uv}</p>
            </div>

            <div className="box">
              <h3>Visibility</h3>
              <p>{weather.current.vis_km} km</p>
            </div>
          </div>

         
                
        
        </>
      )}
    </div>
  );
}

export default App;