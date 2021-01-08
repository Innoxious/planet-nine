import React from 'react';

// import logo from "./logo.svg";
import './App.css';
import MissionTable from './MissionTable';
import { Missions } from './Missions';
import Header from './Header';

const App: React.FC = () => {
  const missions = React.useMemo(() => Missions, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="display-4">Mission Properly</h1>
        <MissionTable missions={missions} />
      </div>
    </>
  );
};

export default App;
