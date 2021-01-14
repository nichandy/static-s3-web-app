// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{new Date(createdAt).toString()}</td>
    <td>
      <button
        style={{ color: 'red' }}
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        X
      </button>
    </td>
  </tr>
);

export default connect()(ExpenseListItem);
