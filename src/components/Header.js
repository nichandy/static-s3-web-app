import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <NavLink exact to="/" activeClassName="is-active">
        <h1>Expensify</h1>
      </NavLink>
    </div>
    <div>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
    </div>
    <div>
      <NavLink to="/edit" activeClassName="is-active">
        Edit
      </NavLink>
    </div>
    <div>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
