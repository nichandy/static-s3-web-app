import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

test('should set text filter object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should set text filter object with value', () => {
  const text = 'Some Filter';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text,
  });
});

test('should set sorting to be by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date',
  });
});

test('should set sorting to be by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount',
  });
});

test('should set start date object with date', () => {
  const action = setStartDate(moment().startOf('day').valueOf());
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment().startOf('day').valueOf(),
  });
});

test('should set end date object with date', () => {
  const action = setEndDate(moment().endOf('day').valueOf());
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment().endOf('day').valueOf(),
  });
});
