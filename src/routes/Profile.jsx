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
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Display name" value={newDisplayName} onChange={handleDisplayName} />
        <input type="submit" value="Update profile" />
      </form>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default Profile;
