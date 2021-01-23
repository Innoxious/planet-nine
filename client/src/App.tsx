import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { User } from './apis/userClient';
import UserContext from './contexts/UserContext';
import NavBar from './NavBar';
import Routes from './Routes';

const App: React.FC = () => {
  const [user, setUser] = React.useState({});
  const updateUser = (user: User): void => setUser(user);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
