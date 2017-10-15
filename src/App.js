import React, { Component } from 'react';

import Grid from './grid';

class App extends Component {

  constructor() {
    super();
    this.state = {
      size: 16,
    }
  }

  handleNewGameClick = () => {
    if (confirm('New Game ?')) { //eslint-disable-line
      this.setState({
        size: 16,
      });
    }
  }

  render() {
    return (
      <div className="app">

        <Grid size={this.state.size} />

        <button onClick={this.handleNewGameClick}>
          New Game
        </button>
      </div>
    );
  }
}

export default App;
