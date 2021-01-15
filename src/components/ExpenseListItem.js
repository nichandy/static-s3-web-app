// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <tr>
    <td>
      <Link to={`/edit/${id}`}>{description}</Link>
    </td>
    <td>{amount}</td>
    <td>{moment(createdAt).format('MMM Do YYYY, h:mm:ss a')}</td>
  </tr>
);

export default ExpenseListItem;
