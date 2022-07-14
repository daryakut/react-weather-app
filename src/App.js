import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.facebook.com/dariakutluieva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daria Kutluieva
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/daryakut/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
