import { createStore } from 'redux';

// Action Generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const setCount = ({ setCountTo = 0 } = {}) => ({
  type: 'SET',
  setCountTo,
});

const resetCount = ({ resetCountTo = 0 } = {}) => ({
  type: 'RESET',
  resetCountTo,
});

/* Reducer Rules
  1. Reducers are pure functions
  2. Never change state or action
*/

// This is an example of a Reducer
// Determines how the state changes based on each action
// Reducers are pure functions, output based only on input
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      };
    case 'SET':
      return {
        count: action.setCountTo,
      };
    case 'RESET':
      return {
        count: action.resetCountTo,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that gets sent to the store
// walk, stop_walking, sit, work, stop_working

// increment, decrement, reset

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 1 }));
store.dispatch(setCount({ setCountTo: 100 }));
store.dispatch(resetCount({ resetCountTo: 1 }));
store.dispatch(resetCount());
// unsubscribe();
