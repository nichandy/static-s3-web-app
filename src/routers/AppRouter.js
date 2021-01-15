import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import Header from '../components/Header';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/create" component={AddExpense} />
        <Route exact path="/edit/:id" component={EditExpense} />
        <Route exact path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
