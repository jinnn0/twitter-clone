import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { firebaseAuth } from '../firebase';
import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import { FiHash } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgMoreO } from 'react-icons/cg';
import { HiUserCircle } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';

const SideBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const history = useHistory();
  const moreBtnRef = useRef();

  const handleLogOut = () => {
    firebaseAuth.signOut();
    history.push('/');
  };

  const openLogOutBtn = () => {
    setIsClicked(true);
  };

  useOnClickOutside(moreBtnRef, () => {
    setIsClicked(false);
  });

  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FaIcons.FaTwitter className="twitter-icon" />
          </Link>
        </li>
        <li>
          <RiIcons.RiHome8Line />
          <span> Home </span>
        </li>
        <li>
          <FiHash />
          <span> Explore </span>
        </li>
        <li>
          <IoMdNotificationsOutline />
          <span> Notification</span>
        </li>
        <li>
          <BiIcons.BiEnvelope />
          <span> Message</span>
        </li>
        <li>
          <BiIcons.BiBookmark />
          <span> Bookmarks </span>
        </li>
        <li>
          <RiIcons.RiFileList2Line />
          <span> Lists </span>
        </li>
        <li>
          <Link to="/profile">
            <FaIcons.FaUser />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <CgMoreO />
          <span> More</span>
        </li>

        <li ref={moreBtnRef} onClick={openLogOutBtn}>
          <HiUserCircle />
          <span> Jinyoung Jeong</span>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </li>

        {isClicked ? (
          <button ref={moreBtnRef} className="btn btn-md btn-danger logout" onClick={handleLogOut}>
            Log out
          </button>
        ) : null}
      </ul>
    </nav>
  );
};

export default SideBar;
