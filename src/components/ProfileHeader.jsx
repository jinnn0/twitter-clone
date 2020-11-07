import React, { useRef } from 'react';
import { GoLocation } from 'react-icons/go';
import { BsCalendar } from 'react-icons/bs';

const ProfileMain = ({ currentUser, setIsEditBtnClick }) => {
  const editBtnRef = useRef();

  const openProfileEditModal = () => {
    setIsEditBtnClick(true);
  };

  return (
    <div className="profileHeader">
      <div className="profileHeader__bg">
        {/* <img src="" alt="background" /> */}
        <div className="default-bg"></div>
      </div>

      <div className="profileHeader__edit-profile">
        <div className="profile-img">
          {currentUser.profilePhoto ? (
            <img src={currentUser.profilePhoto} alt="profile" />
          ) : (
            <div className="default-img"></div>
          )}
        </div>
        <button ref={editBtnRef} className="btn btn-md btn-secondary edit-btn" onClick={openProfileEditModal}>
          Edit profile
        </button>
      </div>

      <div className="profileHeader__username">
        {currentUser.displayName ? currentUser.displayName : currentUser.email}
      </div>

      <div className=" profileHeader__bio">art, visuals and technology</div>

      <div className="profileHeader__other-info">
        <GoLocation /> Dublin
        <BsCalendar className="calendar" /> Joined August 2018
      </div>

      <nav className="profileHeader__nav">
        <ul>
          <li>
            <span>Tweets</span>
          </li>
          <li>
            <span>Tweets & replies</span>
          </li>
          <li>
            <span>Media</span>
          </li>
          <li>
            <span>Likes</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMain;
