import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [myCity, setMyCity] = useState();
  const [cityFound, setCityFound] = useState(false);
  const [weather, setWeather] = useState();
  // weather api: https://goweather.herokuapp.com/weather/Curitiba
  // location api: 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key' || https://geocode.xyz/${lat},${lng}?geoit=json

  const getLocationAndWeather = async () => {
    await navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res = await fetch(
            `https://geocode.xyz/${latitude},${longitude}?geoit=json`
          );

          if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
          } else {
            const { city } = await res.json();
            setCityFound(true);
            setMyCity(city);

            const weatherAPI = await fetch(
              `https://goweather.herokuapp.com/weather/${city}`
            );
            const weatherData = await weatherAPI.json();
            setWeather(weatherData);
            console.log(weatherData);
          }
        } catch (error) {
          console.error(error.message);
        }
      }
    );
  };

  useEffect(() => {
    getLocationAndWeather();
  }, []);

  //   {
  //     "temperature": "+3 °C",
  //     "wind": "41 km/h",
  //     "description": "Partly cloudy",
  //     "forecast": [
  //         {
  //             "day": "1",
  //             "temperature": "5 °C",
  //             "wind": "9 km/h"
  //         },
  //         {
  //             "day": "2",
  //             "temperature": "+7 °C",
  //             "wind": "20 km/h"
  //         },
  //         {
  //             "day": "3",
  //             "temperature": "+9 °C",
  //             "wind": "11 km/h"
  //         }
  //     ]
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="" className="App-logo" alt="logo" /> */}
        {/* <h1>Current Weather</h1> */}
        {myCity ? (
          <h2>Weather in {myCity}</h2>
        ) : (
          <h2>City not found. Try again.</h2>
        )}
        {myCity ? (
          <div>
            <p>{myCity}</p>
            <p>Temperature: {weather.temperature}</p>
            <p>Weather: {weather.description}</p>
            <p>Wind: {weather.wind}</p>

            <ul>
              {weather.forecast.map((day) => (
                <li>{day.temperature}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Try once again</p>
        )}
        {/* {cityFound ? <p>City found</p> : <p>City not found yet</p>} */}

        <p></p>
        <button onClick={getLocationAndWeather}>Try again</button>
      </header>
    </div>
  );
}

export default App;
