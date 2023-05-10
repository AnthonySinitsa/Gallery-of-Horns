import React from "react";
// import Button from 'react-bootstrap/Button';
import './hornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    //increase the number of likes in the value in state
    this.setState({
      likes: this.state.likes + 1
    });
    // this.props.handleShowModal(this.props.name)
  }

  render() {
    return (
      <Card className="HornedBeast">
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>❤️{this.state.likes}</Card.Text>
        <Card.Img
          onClick={() => {
            this.handleLikes();
            this.props.addHearts();
            this.props.handleShowModal(this.props.beast);
          }}
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
        />
        <Card.Body>
          <Card.Text>{this.props.text}</Card.Text>
          {/* <Button>BootStrap Button</Button> */}
        </Card.Body>
      </Card>
    )
  }
};

export default HornedBeast;