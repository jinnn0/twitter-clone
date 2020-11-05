import React, { useState } from 'react';
import ProfileMain from 'components/ProfileMain';
import ProfileEditModal from 'components/ProfileEditModal';

const Profile = ({ currentUser, refreshCurrentUser }) => {
  const [isEditBtnClick, setIsEditBtnClick] = useState(false);

  return (
    <div className="profile">
      <ProfileMain currentUser={currentUser} setIsEditBtnClick={setIsEditBtnClick} />
      {isEditBtnClick ? (
        <ProfileEditModal
          currentUser={currentUser}
          refreshCurrentUser={refreshCurrentUser}
          setIsEditBtnClick={setIsEditBtnClick}
        />
      ) : null}
      <nav>
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

export default Profile;
