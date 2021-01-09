import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import { Missions } from './MissionsConstants';
import MissionTable from './MissionTable';

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
    </>
  );
};

export default Routes;
