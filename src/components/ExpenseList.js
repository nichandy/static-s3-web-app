import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
          {props.expenses.length === 0 ? (
            <tr>
              <td>No Expenses</td>
            </tr>
          ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

// Specifies what data this component wants from the store
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList);
