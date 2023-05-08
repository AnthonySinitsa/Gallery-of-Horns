import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Welcome to 301!</h1>
        </header>
        <main>
          <HornedBeast />
          <HornedBeast name='tony' />
          <HornedBeast />
        </main>
        <footer>
          &copy;2023Sinitsa
        </footer>
      </main>
    );
  }
}


export default Main