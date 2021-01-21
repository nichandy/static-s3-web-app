import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const middlewares = [thunk];
const createMockStore = configureMockStore(middlewares);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', {
    amount: 12.51,
    description: 'Chipotle',
    note: 'Meal after pickup game',
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      amount: 12.51,
      description: 'Chipotle',
      note: 'Meal after pickup game',
    },
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0],
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'keyboard',
    amount: 30000,
    note: 'Mechanical keeb',
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//     },
//   });
// });
