import React from 'react';

const EditExpense = (props) => (
  <div>
    This is the <b>edit expense</b> page
    <p>Editing the expense with id of {props.match.params.id}</p>
  </div>
);

export default EditExpense;
