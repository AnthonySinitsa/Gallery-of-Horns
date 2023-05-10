import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Gallery of Horns hearts</h1>
        <p>{this.props.hearts}</p>
      </header>
    )
  }
}

export default Header;