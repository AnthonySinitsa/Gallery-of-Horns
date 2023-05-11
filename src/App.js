//1. import react
import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

//2. declare the class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      isModalDisplaying: false,
      beastName: 'test',
      selectedBeast: {}
    }
  }

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '❤️'
    });
  }

  handleShowModal = (selectedBeast) => {
    this.setState({
      isModalDisplaying: true,
      selectedBeast: selectedBeast
    });
  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    });
  }

  render() {
    return (
      <>
        <Header
          hearts={this.state.hearts}
        />
        <Main
          addHearts={this.addHearts}
          data={this.state.rawData}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
        <SelectedBeast
          show={this.state.isModalDisplaying}
          onHide={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
      </>
    );
  }
}

//3. export the class
export default App;
