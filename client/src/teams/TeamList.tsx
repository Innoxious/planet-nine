import * as React from 'react';
import { getUserDocumentAsync, User } from '../apis/userClient';
import UserContext from '../contexts/UserContext';

class TeamList extends React.Component {
  state = { user: {} as User };
  static contextType = UserContext;
  componentDidMount = async (): Promise<void> => {
    const userDocument = await getUserDocumentAsync();
    const { user, updateUser } = this.context;
    updateUser(userDocument);
    this.setState({ user });
  };
  render = (): React.ReactNode => {
    const { googleId, teams, dateCreatedUtc, lastUpdatedUtc } = this.state.user;
    return (
      <div>
        <h1>GoogleId: {googleId}</h1>
        <br />
        <h2>DateCreated: {dateCreatedUtc}</h2>
        <br />
        <h2>lastUpdatedUtc{lastUpdatedUtc}</h2>
        <ul>{teams && teams.map((t) => <li>{t.name}</li>)}</ul>
      </div>
    );
  };
}

export default TeamList;
