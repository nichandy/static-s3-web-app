import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Item from '../components/Item';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <h1>Portfolio</h1>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio/:id" component={Item} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
