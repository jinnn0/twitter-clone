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

    console.log('logout');
  };

  return (
    <div className="profile">
      <ProfileMain
        currentUser={currentUser}
        handleLogOut={handleLogOut}
        setIsEditBtnClick={setIsEditBtnClick}
      />
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
