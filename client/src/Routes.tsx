import React from 'react';
import { Route } from 'react-router-dom';
import Header from './home/Header';
import Login from './auth/Login';
import { Missions } from './missions/MissionsConstants';
import MissionTable from './missions/MissionTable';
import { ProtectedRoute, AuthState } from './auth/ProtectedRoute';
import TeamList from './teams/TeamList';

const Routes: React.FC = () => {
  const missions = React.useMemo(() => Missions, []);

  return (
    <>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/missions">
        <MissionTable missions={missions} />
      </Route>
      <ProtectedRoute
        exact
        path="/login"
        requiredAuthState={AuthState.IsNotAuthenticated}
        failureRedirectSlug="/"
      >
        <Login />
      </ProtectedRoute>
      <ProtectedRoute
        exact
        path="/protected"
        requiredAuthState={AuthState.IsAuthenticated}
        failureRedirectSlug="/login"
      >
        <h1>Protected</h1>
      </ProtectedRoute>
      <ProtectedRoute
        exact
        path="/teams"
        requiredAuthState={AuthState.IsAuthenticated}
        failureRedirectSlug="/login"
      >
        <TeamList />
      </ProtectedRoute>
    </>
  );
};

export default Routes;
