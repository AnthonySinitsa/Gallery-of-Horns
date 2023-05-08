//1. import react
import React from 'react';
//import compenent files that i want to use in App
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';

//2. declare the class
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

//3. export the class
export default App;
