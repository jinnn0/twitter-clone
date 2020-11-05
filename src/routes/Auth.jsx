import React from 'react';
import AuthForm from '../components/AuthForm';
import AuthProvider from '../components/AuthProvider';

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__left">
        <div className="texts">
          <p>Follow your interests.</p>
          <p>Hear what people are talking about.</p>
          <p>Join the conversation.</p>
        </div>
      </div>
      <div className="auth__right">
        <AuthForm />
        <AuthProvider />
      </div>
    </div>
  );
};

export default Auth;
