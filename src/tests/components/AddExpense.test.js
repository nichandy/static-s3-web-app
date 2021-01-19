import { shallow } from 'enzyme';
import React from 'react';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />);
});

test('should render AddExpense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render AddExpense page correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});
