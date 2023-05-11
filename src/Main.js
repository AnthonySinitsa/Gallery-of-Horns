import React from 'react';
import HornedBeast from './HornedBeast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import inputData from './data.json';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBeast: inputData,
      rawData: inputData
    }
  }
  filter = (event) => {
    let numberOfHorns = parseInt(event.target.value)
    let allBeasts = this.state.rawData;
    if (numberOfHorns) {
      allBeasts = this.state.rawData.filter(beast => beast.horns === numberOfHorns)
    }
    this.setState({
      filteredBeast: allBeasts
    })
  }
  handleSelectChange = (event) => {
    let selected = event.target.value;
    this.setState({
      howToFilter: selected
    });
  }
  render() {

    let beast = this.state.filteredBeast.map((animal, idx) => {

      return <Col md={4} key={idx}>
        <HornedBeast
          title={animal.title}
          src={animal.image_url}
          alt={animal.alt}
          text={animal.description}
          horns={animal.horns}
          key={animal._id}
          addHearts={this.props.addHearts}
          handleShowModal={this.props.handleShowModal}
          beast={animal}
        />
      </Col>
    });

    return (
      <main>
        <Form>
          <Form.Label>Select Number of Horns</Form.Label>
          <Form.Control as="select" onChange={this.filter}>
            <option value="">All</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">100 Horns</option>
          </Form.Control>
        </Form>
        <Row>
          {beast}
        </Row>
      </main>
    );
  }
}

export default Main;