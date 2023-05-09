import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
  render() {

    let beast = [];
    data.forEach((animal, idx) => {
      beast.push(
        <Col md={4} key={idx}>

          <HornedBeast
            title={animal.title}
            src={animal.image_url}
            alt={animal.alt}
            text={animal.description}
            key={idx}
          />
        </Col>
      )
    });

    return (
      <main>
        <Row>
          {beast}
        </Row>
      </main>
    );
  }
}

export default Main;