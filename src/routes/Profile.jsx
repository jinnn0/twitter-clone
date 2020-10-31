import React, { useState } from 'react';
import { firebaseAuth } from '../firebase';
import { useHistory } from 'react-router-dom';

const Profile = ({ currentUser, refreshCurrentUser }) => {
  let history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(currentUser.displayName);

  const handleLogOut = () => {
    firebaseAuth.signOut();
    history.push('/');
  };

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

  return (
    <div className="profile">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Display name" value={newDisplayName} onChange={handleDisplayName} />
        <input type="submit" value="Update profile" className="input-submit" />
      </form>
      <span className="line"></span>
      <button onClick={handleLogOut} className="logout-btn">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
