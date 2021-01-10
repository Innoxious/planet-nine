import React from 'react';
import { Route } from 'react-router-dom';
import Header from './home/Header';
import Login from './auth/Login';
import { Missions } from './missions/MissionsConstants';
import MissionTable from './missions/MissionTable';
import ProtectedRoute from './auth/ProtectedRoute';

interface Props {
  isAuthenticated: boolean;
}

const Routes: React.FC<Props> = (props: Props) => {
  const missions = React.useMemo(() => Missions, []);

  return (
    <>
      <Route
        exact={true}
        path="/"
        render={() => (
          <>
            <Header />
          </>
        )}
      />
      <Route
        exact={true}
        path="/missions"
        render={() => <MissionTable missions={missions} />}
      />
      <Route exact={true} path="/login" render={() => <Login />} />
      <ProtectedRoute
        exact={true}
        path="/protected"
        isAuthenticated={props.isAuthenticated}
        render={() => <h1>Protected</h1>}
      />
    </>
  );
};

export default Routes;
