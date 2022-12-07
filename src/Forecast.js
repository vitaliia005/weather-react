import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2">
            <div className="forecast-day">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size="32" />
          </div>
          <div className="forecast-temp">
            <span className="min float-left">
              {Math.round(forecast[0].temp.max)}°C{" "}
            </span>
            <span className="max float-right">
              {Math.round(forecast[0].temp.min)}°C
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ca62161fa9c037c12a181a9e71f2e8ab";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);
    return null;
  }
}
