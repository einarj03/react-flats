import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 48.88,
        lng: 2.34
      },
      zoom: 14
    };
  }

  // static defaultProps = {
  //   center: {
  //     lat: 48.88,
  //     lng: 2.34
  //   },
  //   zoom: 14
  // };

  // componentWillUpdate() {
  //   const { lng, lat } = this.props.selectedFlat;
  //   this.setState({
  //     center: {
  //       lat: { lat },
  //       lng: { lng }
  //     }
  //   });
  // }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    // const { selectedFlat, center, zoom } = this.props;
    const { selectedFlat } = this.props;
    const { center, zoom } = this.state;
    return (
      <div className="map-container">
        <GoogleMapReact
          // bootstrapURLKeys={{ key:  YOUR KEY HERE  }}
          defaultCenter={center()}
          defaultZoom={12}
        >
          <Marker lng={selectedFlat.lng} lat={selectedFlat.lat} text={selectedFlat.price} />

        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
