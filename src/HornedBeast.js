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
    //setState basically causes render to be invoked again
  }

  render() {
    return (
      <Card className="HornedBeast">
        <Card.Title>{this.props.title}</Card.Title>
        <p>❤️{this.state.likes}</p>
        <Card.Img
          onClick={this.handleLikes}
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
        />
        <Card.Body>
          <p>{this.props.alt}</p>
          <p>{this.props.text}</p>
          {/* <Button>BootStrap Button</Button> */}
        </Card.Body>
      </Card>
    )
  }
};

export default HornedBeast;