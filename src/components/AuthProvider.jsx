import React from 'react';
import { firebase } from '../firebase';
import { firebaseAuth } from '../firebase';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

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
    <div className="auth-provider">
      <button className="btn btn-lg btn-outline google" name="google" onClick={handleSocialClick}>
        <FcGoogle className="social-icon" />
        Continue with Google
      </button>
      <button className="btn btn-lg  facebook" name="facebook" onClick={handleSocialClick}>
        <FaFacebook className="social-icon" />
        Continue with Facebook
      </button>
    </div>
  );
};

export default AuthProvider;
