import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'House Payment',
    note: 'Mortgage for January',
    amount: 9100,
    createdAt: moment().startOf('day').valueOf(),
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should remove expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount: 200,
      note: 'Chewing Gum',
      createdAt: moment(0),
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({
    id: '1',
    description: 'Gum',
    amount: 200,
    note: 'Chewing Gum',
    createdAt: moment(0),
  });
});

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: 200,
      note: 'Chewing Gum',
      createdAt: moment(0),
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
