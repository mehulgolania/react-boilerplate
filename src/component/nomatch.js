import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function NoMatch() {
  return(
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <h1>404</h1>
            <Link to="/">Go back to home.</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NoMatch;
