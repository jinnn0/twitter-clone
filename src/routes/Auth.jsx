import React from 'react';
import AuthForm from '../components/AuthForm';
import AuthProvider from '../components/AuthProvider';

const Auth = () => {
  return (
    <>
      <AuthForm />
      <AuthProvider />
    </>
  );
};

export default Auth;
