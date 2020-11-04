import React, { useState, useRef } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { GoLocation } from 'react-icons/go';
import { BsCalendar } from 'react-icons/bs';

const ProfileMain = ({ currentUser, handleLogOut, setIsEditBtnClick }) => {
  const [isMoreBtnClicked, setIsMoreBtnClicked] = useState(false);
  const editBtnRef = useRef();
  const moreBtnRef = useRef();

  const openLogOutBtn = () => {
    setIsMoreBtnClicked(true);
  };

  const openProfileEditModal = () => {
    setIsEditBtnClick(true);
  };

  useOnClickOutside(moreBtnRef, () => {
    setIsMoreBtnClicked(false);
  });

  return (
    <>
      <div className="profile__row-1">
        {/* <img src="" alt="background" /> */}
        <div className="default-bg"></div>
      </div>

      <div className="profile__row-2">
        <div className="profile-img">
          {currentUser.profilePhoto ? (
            <img src={currentUser.profilePhoto} alt="profile" />
          ) : (
            <div className="default-img"></div>
          )}
        </div>
        <button ref={editBtnRef} className="edit-btn" onClick={openProfileEditModal}>
          Edit profile
        </button>
        <div ref={moreBtnRef} className="more-btn" onClick={openLogOutBtn}>
          :
        </div>
        {isMoreBtnClicked ? (
          <div className="logout" onClick={handleLogOut}>
            Log out
          </div>
        ) : null}
      </div>

      <div className="profile__row-3">
        {currentUser.displayName ? currentUser.displayName : currentUser.email}
      </div>

      <div className="profile__row-4">art, visuals and technology</div>

      <div className="profile__row-5">
        <GoLocation className="icon " /> Dublin
        <BsCalendar className="icon calendar" /> Joined August 2018
      </div>
    </>
  );
};

export default ProfileMain;
