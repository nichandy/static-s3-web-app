import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import DraggableMap from './components/maps/draggableMap/DraggableMap';
import SimpleMap from './components/maps/simpleMap/SimpleMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SimpleMap />
      </div>
    );
  }
}

export default hot(App);
