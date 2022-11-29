import React, { useState } from "react";
import axios from "axios";

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
        `Here are the weather details for ${city}:
         Temperature: ${temperature}°C
         Humidity: ${humidity}%
         Description: ${description}
         Wind: ${wind}km/h`
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a query" onChange={updateCity} />
        <input type="submit" value="Submit" />
        <div>{message}</div>
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
