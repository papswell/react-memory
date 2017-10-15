import React, { Component } from 'react';

import Grid from './grid';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Grid size={16} />
      </div>
    );
  }
}

export default App;
