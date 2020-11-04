import React, { useState } from 'react';
import { firebaseAuth } from '../firebase';
import { useHistory } from 'react-router-dom';
import ProfileMain from 'components/ProfileMain';

const Profile = ({ currentUser }) => {
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
    </div>
  );
};

export default Profile;
