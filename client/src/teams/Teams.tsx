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
    this.context.updateUser(user);
    this.setState({ user });
  };
  render = (): React.ReactNode => {
    const { googleId } = this.state.user;
    const { user } = this.context;

    return (
      <>
        <div className="d-md-flex justify-content-center">
          <TeamList />
          {(!user.teams || user.teams.length < 10) && <TeamForm />}
        </div>
        <div className="mt-5">
          <small>GoogleId: {googleId}</small>
        </div>
      </>
    );
  };
}

export default Teams;
