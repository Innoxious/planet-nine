import React from 'react';
import { Route } from 'react-router-dom';
import Header from './home/Header';
import Login from './login/Login';
import { Missions } from './missions/MissionsConstants';
import MissionTable from './missions/MissionTable';

const Routes: React.FC = () => {
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
    </>
  );
};

export default Routes;
