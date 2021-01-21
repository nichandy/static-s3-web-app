import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

/* How redux worked before db */
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

/* How actions works after adding db */
// component calls action generator
// action generator returns function
// component dispatches function
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE Action Generator
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE_EXPENSE Action Generator
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT_EXPENSE Generator
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
