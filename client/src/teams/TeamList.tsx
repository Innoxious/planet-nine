import * as React from 'react';
import { Team } from '../apis/userClient';

interface Props {
  teams?: Array<Team>;
}

const TeamList: React.FC<Props> = ({ teams }) => {
  return teams?.length ? (
    <div>
      <h2>Your teams</h2>
      {teams && (
        <ul>
          {teams.map((t) => (
            <li>{t.name}</li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <h2>no teams...</h2>
  );
};

export default TeamList;
