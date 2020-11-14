import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import { firebaseAuth } from './firebase';
import Router from './Router';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setCurrentUser({
          userName: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          uid: user.uid,
          updateProfile: (argg) => user.updateProfile(argg)
        });
      } else {
        setIsLoggedIn(false);
      }

      setInit(true);
    });
  }, []);

  const refreshCurrentUser = () => {
    setCurrentUser({
      ...currentUser,
      userName: firebaseAuth.currentUser.displayName,
      avatar: firebaseAuth.currentUser.photoURL
    });
  };

  return (
    <div className="App">
      {init ? (
        <Router isLoggedIn={isLoggedIn} currentUser={currentUser} refreshCurrentUser={refreshCurrentUser} />
      ) : (
        <h3 className="init-message">initializing..</h3>
      )}
    </div>
  );
}

export default App;
