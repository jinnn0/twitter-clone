import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Nav = ({ currentUser }) => {
  return (
    <nav>
      <Link to="/profile" className="link_profile">
        <FaUser className="link_icon" />
        {currentUser.displayName ? currentUser.displayName : currentUser.email}
      </Link>
    </nav>
  );
};

export default Nav;
