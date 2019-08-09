import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    const { flats } = this.props;
    return (
      <div className="flat-list">
        {flats.map((flat) => {
          return <Flat flat={flat} updateSelectedFlat={this.props.updateSelectedFlat} key={flat.name}/>;
        })}
      </div>
    );
  }
}

export default FlatList;
