import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size="32" />

      <div className="forecast-temp">
        <span className="min float-left">
          {Math.round(props.data.temp.max)}°C{" "}
        </span>
        <span className="max float-right">
          {Math.round(props.data.temp.min)}°C
        </span>
      </div>
    </div>
  );
}
