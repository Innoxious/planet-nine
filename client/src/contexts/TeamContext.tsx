import * as React from 'react';
import { Team } from '../apis/userClient';

const TeamContext = React.createContext({
  team: {} as Team,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateTeam: (team: Team): void => {
    return;
  },
});

export default TeamContext;
