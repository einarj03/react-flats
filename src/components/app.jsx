import React, { Component } from 'react';
import FlatList from './flatList';
import flats from '../data/flats';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList flats={flats}/>
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
