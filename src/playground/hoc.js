// Higher Order Component (HOC) - A component that renders other components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponnent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponnent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponnent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponnent {...props} />
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="There are the details" />,
  document.getElementById('app')
);
