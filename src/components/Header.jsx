import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="link_home">
        <FaTwitter className="link_icon" />
      </Link>
    </header>
  );
};

export default Header;
