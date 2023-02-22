import "./Card.css";
import { WiWindBeaufort6, WiCelsius } from "weather-icons-react";

// TODO: replace C with celcius icon
// https://najens.github.io/weather-icons-react/

// TODO: read up on React.lazy and React.suspense for conditional importing
// https://prawira.medium.com/react-conditional-import-conditional-css-import-110cc58e0da6

function Card({ myCity, weather }) {
  const wind = {
    calm: [0],
    lightAir: [1, 3],
    lightBreeze: [4, 7],
    gentleBreeze: [8, 12],
    moderateBreeze: [13, 18],
    freshBreeze: [19, 24],
    strongBreeze: [25, 31],
    nearGale: [32, 38],
    gale: [39, 46],
    strongGale: [47, 54],
    wholeGale: [55, 63],
    stormForce: [64, 75],
    hurricaneForce: [75, 500],
  };

  function windStrength(currentWind) {
    if (currentWind === undefined) {
      return undefined;
    } else {
      const currentWindNumber = currentWind.slice(0, 3).replace(/\s/g, "");
      const [windType] = Object.entries(wind).find(
        (type) =>
          currentWindNumber >= type[1][0] && currentWindNumber <= type[1][1]
      );

      const windTypeWithSpace = String(windType)
        .replace(/([A-Z])/g, " $1")
        .trim();

      const windTypeArray = windTypeWithSpace.split(" ");
      const word0Cap =
        windTypeArray[0].charAt(0).toUpperCase() + windTypeArray[0].slice(1);
      const word1Low =
        windTypeArray[1].charAt(0).toLowerCase() + windTypeArray[1].slice(1);

      return `${word0Cap} ${word1Low}`;
    }
  }

  return (
    <div className="weather-card">
      <p className="weather-card__temperature">
        {weather ? (
          <>
            {String(weather?.temperature.split(" ")[0])}
            <WiCelsius
              size={65}
              style={{ marginLeft: "-16px", strokeWidth: "0.25px" }}
            />
          </>
        ) : (
          <p className="weather-card__temperature--loading">loading...</p>
        )}
      </p>

      <p className="weather-card__type">
        {weather?.description ?? "loading..."}
      </p>

      <p className="weather-card__wind">
        {windStrength(weather?.wind) ?? "loading..."}
      </p>
    </div>
  );
}

export default Card;
