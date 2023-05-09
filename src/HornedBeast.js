import React from "react";
import Button from 'react-bootstrap/Button';
import './hornedBeast.css';

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
      <article>
        <h2>{this.props.title}</h2>
        <p>❤️{this.state.likes}likes</p>
        <p onClick={this.handleLikes}>Like me here</p>
        <img
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
        ></img>
        <p>{this.props.alt}</p>
        <Button>BootStrap Button</Button>
      </article>
    )
  }
};

export default HornedBeast;