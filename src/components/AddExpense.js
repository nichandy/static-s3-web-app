import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
  <div>
    This is the <b>add expense</b> page
    <ExpenseForm
      onSubmit={(expense) => {
        console.log(expense);
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpense);
