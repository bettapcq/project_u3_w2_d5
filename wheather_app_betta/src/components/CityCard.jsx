/* eslint-disable react-hooks/exhaustive-deps */
import Card from 'react-bootstrap/Card';
import { Spinner, Alert, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CityCard(props) {
  const [cityWeather, setCityWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const city = props.city;
  const URL1Day =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    city +
    '&appid=95723ee6fa2593fc6b5069039fc68774&units=metric';

  const getCurrentWeather = () => {
    fetch(URL1Day)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('Error', res.status);
        }
      })
      .then((weatherDetails) => {
        console.log('weather details: ', weatherDetails);
        setCityWeather(weatherDetails);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log('errore nella chiamata', err);
      });
  };

  useEffect(() => {
    if (city) {
      getCurrentWeather();
    }
  }, [city]);

  return (
    <>
 
      {loading && <Spinner animation="grow" variant="info" />}
      {error && <Alert variant="danger">Ops c'è stato un errore</Alert>}
      {cityWeather && (
        <Card className="m-2 text-center shadow h-100" fluid={true}>
          <Card.Img
            variant="top"
            src="/weathersr.jpg"
            alt="weathers"
          />
          <Card.Body>
            <Card.Title className="border border-1 p-2">
              {cityWeather.name}
            </Card.Title>

            <Card.Text className="flex-grow-1">
              <Image
                src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
                className="mh-25"
              />
              Today's weather: {cityWeather.weather[0].description}
            </Card.Text>
            <Card.Text>
              Temperature: {Math.floor(cityWeather.main.temp_min)}°C /
              {Math.floor(cityWeather.main.temp_max)}°C
            </Card.Text>
            <Link
              to={`/details?lat=${cityWeather.coord.lat}&lon=${cityWeather.coord.lon}`}
              className="btn btn-info"
              variant="info"
            >
              See more
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default CityCard;
