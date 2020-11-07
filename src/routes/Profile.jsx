import React, { useState } from 'react';
import ProfileHeader from 'components/ProfileHeader';
import ProfileEditModal from 'components/ProfileEditModal';

const Profile = ({ currentUser, refreshCurrentUser }) => {
  const [isEditBtnClick, setIsEditBtnClick] = useState(false);

  return (
    <div className="profile">
      <ProfileHeader currentUser={currentUser} setIsEditBtnClick={setIsEditBtnClick} />

      {isEditBtnClick ? (
        <ProfileEditModal
          currentUser={currentUser}
          refreshCurrentUser={refreshCurrentUser}
          setIsEditBtnClick={setIsEditBtnClick}
        />
      ) : null}
    </div>
  );
};

export default Profile;
