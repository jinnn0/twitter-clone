import React, { useState } from 'react';
import { firebaseAuth } from '../firebase';
import { useHistory } from 'react-router-dom';
import ProfileMain from 'components/ProfileMain';
import ProfileEditModal from 'components/ProfileEditModal';

const Profile = ({ currentUser, refreshCurrentUser }) => {
  let history = useHistory();
  const [isEditBtnClick, setIsEditBtnClick] = useState(false);

  const handleLogOut = () => {
    firebaseAuth.signOut();
    history.push('/');
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <ProfileMain
          currentUser={currentUser}
          handleLogOut={handleLogOut}
          setIsEditBtnClick={setIsEditBtnClick}
        />
      </div>
      {isEditBtnClick ? (
        <ProfileEditModal
          currentUser={currentUser}
          refreshCurrentUser={refreshCurrentUser}
          setIsEditBtnClick={setIsEditBtnClick}
        />
      ) : null}
      <nav>
        <ul>
          <li>Tweets</li>
          <li>Tweets & replies</li>
          <li>Media</li>
          <li>Likes</li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
