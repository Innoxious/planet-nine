import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
