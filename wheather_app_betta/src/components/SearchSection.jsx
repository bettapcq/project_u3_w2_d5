import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CityCard from './CityCard';
import { useState } from 'react';

const SearchSection = () => {
  const [inputString, setInputString] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Container fluid>
        <h1 className="text-center my-3">Search you city</h1>
        <Row className="flex-column mt-3">
          <Col>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                setSearchQuery(inputString.trim(' '));
              }}
            >
              <InputGroup className="mb-3">
                <Form.Control
                  type="search"
                  placeholder="write your city here"
                  aria-label="Search"
                  value={inputString}
                  onChange={(e) => setInputString(e.target.value)}
                />

                <Button type="submit" variant="outline-secondary">
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col>
            <Row className="justify-content-center">
              {inputString !== '' && (
                <Col xs={12} md={6}>
                  <CityCard city={searchQuery} />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchSection;
