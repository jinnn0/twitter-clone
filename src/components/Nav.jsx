import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Nav = ({ currentUser }) => {
  let displayName;
  if (currentUser) {
    displayName = currentUser.displayName ? currentUser.displayName : currentUser.email;
  } else {
    displayName = null;
  }

  return (
    <nav>
      <Link to="/profile" className="link_profile">
        <FaUser className="link_icon" />
        {displayName}
      </Link>
    </nav>
  );
};

export default Nav;
