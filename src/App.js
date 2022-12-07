import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from "./Forecast";
import WeatherData from "./WeatherData";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Munich" />
        <Footer />
      </div>
    </div>
  );
}
