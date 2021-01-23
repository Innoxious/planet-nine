import * as React from 'react';
import { getUserDocumentAsync, User } from '../apis/userClient';
import UserContext from '../contexts/UserContext';
import TeamForm from './TeamForm';
import TeamList from './TeamList';

class Teams extends React.Component {
  state = { user: {} as User };
  static contextType = UserContext;
  componentDidMount = async (): Promise<void> => {
    const user = await getUserDocumentAsync();
    const { updateUser } = this.context;
    updateUser(user);
    this.setState({ user });
  };
  render = (): React.ReactNode => {
    const { googleId, teams, dateCreatedUtc, lastUpdatedUtc } = this.state.user;
    return (
      <>
        <div className="d-sm-flex justify-content-between">
          <TeamList teams={teams} />
          {(!teams || teams.length < 10) && <TeamForm />}
        </div>
        <div className="mt-5">
          <small>
            DEBUG:
            <br />
            GoogleId: {googleId}
            <br />
            DateCreated: {dateCreatedUtc}
            <br />
            LastUpdatedUtc: {lastUpdatedUtc}
            <br />
          </small>
        </div>
      </>
    );
  };
}

export default Teams;
