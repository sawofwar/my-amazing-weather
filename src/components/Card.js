import "./Card.css";

function Card({ myCity, weather }) {
  return (
    <div className="weather-card">
      {/* <h3 className="weather-card__heading">{myCity}</h3> */}

      <p className="weather-card__temperature">
        {weather?.temperature ?? "loading..."}
      </p>

      <p className="weather-card__type">
        {weather?.description ?? "loading..."}
      </p>

      <p className="weather-card__wind">{weather?.wind ?? "loading..."}</p>
    </div>
  );
}

export default Card;
