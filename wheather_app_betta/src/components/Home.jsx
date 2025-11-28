import { Container, Row, Col } from 'react-bootstrap';
import CityCard from './CityCard';

const Home = () => {
  return (
    <Container fluid className="py-5 flex-grow-1">
          <h1 className='text-center my-3'>Explore most popular cities</h1>
      <Row>
        <Col>
          <Row>
            <Col xs={12} md={4} className='h-100'>
              <CityCard city="Turin" />
            </Col>
            <Col xs={12} md={4} className='h-100'>
              <CityCard city="Montreal" />
            </Col>
            <Col xs={12} md={4} className='h-100'>
              <CityCard city="Sidney" />
            </Col>
            <Col xs={12} md={4} className='h-100'>
              <CityCard city="Tokyo" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
