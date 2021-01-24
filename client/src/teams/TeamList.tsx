import * as React from 'react';
import UserContext from '../contexts/UserContext';

const TeamList: React.FC = () => {
  const { user } = React.useContext(UserContext);

  return user.teams?.length ? (
    <div className="mx-auto mb-3">
      <h2>Your teams</h2>
      {user.teams && (
        <ul className="list-group text-dark text-truncate">
          {user.teams.map((t, i) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={`${t.name}-${i}`}
            >
              {t.name}
              {t.missions?.length ? (
                <span className="badge badge-primary badge-pill">
                  {`Total attempts: ${t?.missions
                    ?.map((m) => m.attempts)
                    ?.reduce((a, c) => a + c)}`}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <h2>no teams...</h2>
  );
};

export default TeamList;
