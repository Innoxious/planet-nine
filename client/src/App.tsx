import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';

const App: React.FC = () => (
  <BrowserRouter>
    <NavBar />
    <div className="container">
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
