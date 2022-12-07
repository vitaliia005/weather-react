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
    <div className="ForecastDay text-center">
      <div className="forecast-day col-sm-2">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size="32" />

      <div className="forecast-temp">
        <span className="min">{Math.round(props.data.temp.max)}° </span>
        <span className="max">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
