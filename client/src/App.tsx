import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import checkIfAuthenticatedAsync from './apis/Auth';
import NavBar from './NavBar';
import Routes from './Routes';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  React.useEffect(() => {
    const check = async () => {
      const isAuthenticated = await checkIfAuthenticatedAsync();
      setIsAuthenticated(isAuthenticated);
    };

    check();
    console.log(`Authentication effect returning: ${isAuthenticated}`);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes isAuthenticated={isAuthenticated} />
      </div>
    </BrowserRouter>
  );
};

export default App;
