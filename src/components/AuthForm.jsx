import React, { useState } from 'react';
import { firebaseAuth } from '../firebase';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await firebaseAuth.createUserWithEmailAndPassword(email, password);
      } else {
        data = await firebaseAuth.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="Email" required value={email} onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="input-submit">
          {newAccount ? 'Sign Up' : 'Sign In'}{' '}
        </button>
        {error}

        <button onClick={toggleAccount} className="auth-switch">
          {newAccount ? 'Log In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
