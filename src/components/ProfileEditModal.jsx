import React, { useState, useRef } from 'react';
import * as AiIcons from 'react-icons/ai';
import useOnClickOutside from '../hooks/useOnClickOutside';

const ProfileEditModal = ({ currentUser, refreshCurrentUser, setIsEditBtnClick }) => {
  const [newDisplayName, setNewDisplayName] = useState(currentUser.displayName || '');
  const editFormRef = useRef();

  const handleDisplayName = (e) => {
    setNewDisplayName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newDisplayName !== currentUser.displayName) {
      await currentUser.updateProfile({ displayName: newDisplayName });
      refreshCurrentUser();
    }
  };

  useOnClickOutside(editFormRef, () => {
    setIsEditBtnClick(false);
  });
  return (
    <div className="edit-modal">
      <form ref={editFormRef} onSubmit={handleSubmit} className="edit-modal-form">
        <div className="edit-modal-form__row-1">
          <AiIcons.AiOutlineClose className="close" />
          <h3>Edit profile</h3>
          <button type="submit" className="save">
            Save
          </button>
        </div>

        <div className="edit-modal-form__row-2">
          <label htmlFor="bg-img">
            <AiIcons.AiOutlineCamera className="camera" />
            <AiIcons.AiOutlineClose className="close" />
            <input type="file" accept="image/*" id="bg-img" className="bg-img" />
          </label>
        </div>

        <div className="edit-modal-form__row-3">
          <div className="profile-img">
            {currentUser.profilePhoto ? (
              <img src={currentUser.profilePhoto} alt="" />
            ) : (
              <div className="default-img"></div>
            )}

            <label htmlFor="profile-img">
              <AiIcons.AiOutlineCamera className="camera" />
            </label>
            <input type="file" accept="image/*" id="profile-img" className="input" />
          </div>
        </div>

        <div className="edit-modal-form__row-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="input"
            value={newDisplayName}
            onChange={handleDisplayName}
          />
        </div>

        <div className="edit-modal-form__row-5">
          <label htmlFor="bio">Bio</label>
          <textarea type="text" id="name" className="input" />
        </div>

        <div className="edit-modal-form__row-6">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" className="input" />
        </div>
      </form>
    </div>
  );
};

export default ProfileEditModal;
