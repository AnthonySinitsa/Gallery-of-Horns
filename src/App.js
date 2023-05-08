//1. import react
import React from 'react';
//import compenent files that i want to use in App
import Main from './Main.js';

//2. declare the class
class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Welcome to 301!</h1>
        </header>
        <main>
          <article>
            <h3>other title</h3>
            <p>paragraph</p>
          </article>
        </main>
        <Main />
        <footer>
          &copy;2023Sinitsa
        </footer>
      </>
    );
  }
}

//3. export the class
export default App;
