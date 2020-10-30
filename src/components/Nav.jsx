import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">{currentUser ? currentUser.displayName : 'My Profile'}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
