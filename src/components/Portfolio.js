import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the following things I've done</p>
    <div>
      <Link to="/portfolio/1">Item One</Link>
    </div>
    <div>
      <Link to="/portfolio/2">Item Two</Link>
    </div>
  </div>
);

export default Portfolio;
