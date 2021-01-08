import React from "react";

// import logo from "./logo.svg";
import "./App.css";
import MissionTable from "./MissionTable";
import { Missions } from './Missions';

const App : React.FC = () => (
  <>
    {/* <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div> */}
    <div className="container">
      <h1 className="display-4">
        Mission Properly
      </h1>
      <MissionTable missions={Missions} />
    </div>
  </>
);

export default App;

