import "./Card.css";

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

      const capitalisedWindTypeWithSpace =
        windTypeWithSpace.charAt(0).toUpperCase() + windTypeWithSpace.slice(1);
      return `${word0Cap} ${word1Low}`;
    }
  }

  return (
    <div className="weather-card">
      {/* <h3 className="weather-card__heading">{myCity}</h3> */}

      <p className="weather-card__temperature">
        {weather?.temperature ?? "loading..."}
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
