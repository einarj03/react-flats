import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import FlatList from './flatList';
// import MapContainer from './mapContainer';
import Marker from './marker';

import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0]
    };
  }

  updateSelectedFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  center = () => {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }


  render() {
    const { selectedFlat } = this.state;
    // const center = {
    //   lng: selectedFlat.lng,
    //   lat: selectedFlat.lat
    // };

    return (
      <div>
        <FlatList flats={flats} updateSelectedFlat={this.updateSelectedFlat} />
        <div className="map-container">
          <GoogleMapReact
            // bootstrapURLKeys={{ key:  YOUR KEY HERE  }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker lng={selectedFlat.lng} lat={selectedFlat.lat} text={selectedFlat.price} />

          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
