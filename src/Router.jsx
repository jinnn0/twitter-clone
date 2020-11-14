import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Auth from './routes/Auth';
import Feed from './routes/Feed';
import Profile from './routes/Profile';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';

const Router = ({ isLoggedIn, currentUser, refreshCurrentUser }) => {
  return (
    <HashRouter>
      <Switch>
        <>
          {isLoggedIn ? (
            <div className="main">
              <Sidebar />
              <Route exact path="/" component={() => <Feed currentUser={currentUser} />} />
              <Route
                exact
                path="/profile"
                component={() => (
                  <Profile currentUser={currentUser} refreshCurrentUser={refreshCurrentUser} />
                )}
              />
              <Widget />
            </div>
          ) : (
            <>
              <Route exact path="/" component={Auth} />
            </>
          )}
        </>
      </Switch>
    </HashRouter>
  );
};

export default Router;
