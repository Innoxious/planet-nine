import * as React from 'react';
import { getUserDocumentAsync, User } from '../apis/userClient';
import UserContext from '../contexts/UserContext';

class TeamList extends React.Component {
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
      <div>
        <p>GoogleId: {googleId}</p>
        <p>DateCreated: {dateCreatedUtc}</p>
        <p>lastUpdatedUtc: {lastUpdatedUtc}</p>
        <ul>{teams && teams.map((t) => <li>{t.name}</li>)}</ul>
      </div>
    );
  };
}

export default TeamList;
