import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [description, setDescription] = useState("");

  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (temperature) {
      setMessage(
        <body>
          <div className="weather-today">
            <h1>{city}</h1>
            <p>{description}</p>
            <div className="row">
              <div className="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="cloudy"
                ></img>

                <ul>
                  <li>{temperature}°C</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {humidity}%</li>
                  <li>Wind: {wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      );
    } else {
      setMessage(`Please type a city in a search field.`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let apiKey = "ca62161fa9c037c12a181a9e71f2e8ab";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function showWeatherDetails(response) {
    //setLoaded(true);
    setTemperature(Math.round(response.data.main.temp));
    setWind(Math.round(response.data.wind.speed));
    setHumidity(Math.round(response.data.main.humidity));
    setDescription(response.data.weather[0].description);
  }
  axios.get(apiUrl).then(showWeatherDetails);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              onChange={updateCity}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>

          <div>{message}</div>
        </div>
      </form>
      <a
        class="link"
        href="https://github.com/vitaliia005/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Check the project on github
      </a>
    </div>
  );
}
