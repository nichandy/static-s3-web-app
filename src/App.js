import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import DraggableMap from './components/maps/draggableMap/DraggableMap';
import SimpleMap from './components/maps/simpleMap/SimpleMap';
import CitiesMap from './components/maps/citiesMap/CitiesMap';
import Pins from './components/maps/common/Pins';
import CityMap from './components/maps/cityMap/CityMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CityMap />
      </div>
    );
  }
}

export default hot(App);
