import React from 'react';
import { Route } from 'react-router-dom';
import Header from './home/Header';
import Login from './auth/Login';
import { Missions } from './missions/MissionsConstants';
import MissionTable from './missions/MissionTable';
import ProtectedRoute from './auth/ProtectedRoute';

const Routes: React.FC = () => {
  const missions = React.useMemo(() => Missions, []);

  return (
    <>
      <Route exact={true} path="/">
        <Header />
      </Route>
      <Route exact={true} path="/missions">
        <MissionTable missions={missions} />
      </Route>
      <Route exact={true} path="/login">
        <Login />
      </Route>
      <ProtectedRoute
        exact={true}
        path="/protected"
        // render={() => <h1>Protected</h1>}
      >
        <h1>Protected</h1>
      </ProtectedRoute>
    </>
  );
};

export default Routes;
