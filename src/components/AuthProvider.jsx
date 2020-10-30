import React from 'react';
import { firebase } from '../firebase';
import { firebaseAuth } from '../firebase';

const AuthProvider = () => {
  const handleSocialClick = async (e) => {
    const {
      target: { name }
    } = e;

    let provider;
    if (name === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    } else if (name === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
    }

    const data = await firebaseAuth.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div>
      <button name="google" onClick={handleSocialClick}>
        Continue with Google
      </button>
      <button name="facebook" onClick={handleSocialClick}>
        Continue with Facebook
      </button>
    </div>
  );
};

export default AuthProvider;
