import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Header from './Header';
import Nav from './Nav';

const Router = ({ isLoggedIn, currentUser, refreshCurrentUser }) => {
  return (
    <HashRouter>
      <Header />
      {isLoggedIn && <Nav currentUser={currentUser} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={() => <Home currentUser={currentUser} />} />
            <Route
              exact
              path="/profile"
              component={() => <Profile currentUser={currentUser} refreshCurrentUser={refreshCurrentUser} />}
            />
          </>
        ) : (
          <>
            <Route exact path="/" component={Auth} />
          </>
        )}
      </Switch>
    </HashRouter>
  );
};

export default Router;
