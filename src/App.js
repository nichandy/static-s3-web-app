import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: 'Water Bill', amount: 250, createdAt: Date.now() })
);
store.dispatch(
  addExpense({
    description: 'Gas Bill',
    amount: 96,
    createdAt: Date.now() - 12000000000,
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 109500,
    createdAt: Date.now() - 20000045000,
  })
);

// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
