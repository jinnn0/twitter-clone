import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import { FiHash } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgMoreO } from 'react-icons/cg';
import { HiUserCircle } from 'react-icons/hi';

const SideBar = () => {
  return (
    <div className="sidebar-container">
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

          <li>
            <HiUserCircle />
            <span> More</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
