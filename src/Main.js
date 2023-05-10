import React from 'react';
import HornedBeast from './HornedBeast';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
  render() {

    let beast = this.props.data.map((animal, idx) => {

      return <Col md={4} key={idx}>
        <HornedBeast
          title={animal.title}
          src={animal.image_url}
          alt={animal.alt}
          text={animal.description}
          key={idx}
          addHearts={this.props.addHearts}
          handleShowModal={this.props.handleShowModal}
          beast={animal}
        />
      </Col>
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