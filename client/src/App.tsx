import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Team, User } from './apis/userClient';
import TeamContext from './contexts/TeamContext';
import UserContext from './contexts/UserContext';
import NavBar from './NavBar';
import Routes from './Routes';

const App: React.FC = () => {
  const [user, setUser] = React.useState({});
  const [team, setTeam] = React.useState({});
  const updateUser = (user: User): void => setUser(user);
  const updateTeam = (team: Team): void => setTeam(team);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <TeamContext.Provider value={{ team, updateTeam }}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes />
          </div>
        </BrowserRouter>
      </TeamContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
