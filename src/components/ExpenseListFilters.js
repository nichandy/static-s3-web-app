import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    switch (e.target.value) {
      case 'amount':
        this.props.sortByAmount();
        break;
      case 'date':
        this.props.sortByDate();
        break;
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId="apple"
          endDateId="orange"
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
