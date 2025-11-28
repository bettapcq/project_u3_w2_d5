/* eslint-disable react-hooks/exhaustive-deps */
import {
  Card,
  Spinner,
  Alert,
  ListGroup,
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CityDetails = () => {
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get('lat');
  const lon = queryParams.get('lon');

  const [cityWeather, setCityWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const URL5Days = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&&appid=95723ee6fa2593fc6b5069039fc68774&units=metric`;

  const get5DaysWeather = () => {
    fetch(URL5Days)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('Error', res.status);
        }
      })
      .then((weather5Days) => {
        console.log('weather 5 days details: ', weather5Days);
        setCityWeather(weather5Days);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log('errore nella chiamata', err);
      });
  };

  useEffect(get5DaysWeather, []);

  return (
    <>
      <Container>
        <h1 className='text-center my-3'>City Details</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            {loading && <Spinner animation="grow" variant="info" />}
            {error && <Alert variant="danger" />}
            {cityWeather && (
              <Card className="m-2 text-center shadow">
                <Card.Img
                  variant="top"
                  src="src\assets\img\weathersr.jpg"
                  alt="weathers"
                />
                <Card.Body>
                  <Card.Title className="border border-1 p-2">
                    {cityWeather.city.name}
                  </Card.Title>

                  <div>
                    <ListGroup>
                      {cityWeather.list
                        .filter((item) => item.dt_txt.endsWith('12:00:00'))
                        .map((day, index) => {
                          return (
                            <ListGroup.Item key={index}>
                              <h5>{day.dt_txt.split(' ')[0]}</h5>
                              <br />
                              <Image
                                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                              />
                              <br />
                              <p>
                                <strong>Weather: </strong>{' '}
                                {day.weather[0].description} <br />
                                <strong>Temperature: </strong> {day.main.temp}{' '}
                                °C
                              </p>
                            </ListGroup.Item>
                          );
                        })}
                    </ListGroup>
                  </div>

                  <Link to="/" className="btn btn-info">
                    Go to Home
                  </Link>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CityDetails;
