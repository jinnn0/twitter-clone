import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import { firebaseAuth } from './firebase';
import Router from './components/Router';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUse] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setCurrentUse(user);
        setCurrentUse({
          displayName: user.displayName,
          email: user.email,
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
    setCurrentUse(firebaseAuth.currentUser);
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
