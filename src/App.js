import "./App.css";
import { useEffect } from "react";

function App() {
  // api: https://goweather.herokuapp.com/weather/Curitiba
  // const key = process.env.REACT_APP_API_KEY;
  // const funWeather = (place) => {
  //   fetch(`https://goweather.herokuapp.com/weather/${place}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  useEffect(() => {
    /*
    const city = prompt("Provide city");
    const funWeather = (place) => {
      fetch(`https://goweather.herokuapp.com/weather/${place}`)
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    funWeather(city);
    */

    navigator.geolocation.getCurrentPosition((position) =>
      console.log(position)
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="" className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
