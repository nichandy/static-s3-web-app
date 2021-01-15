import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
  const expenseData = {
    amount: 12.51,
    description: 'Chipotle',
    note: 'Meal after pickup game',
    createdAt: 123040500,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
