import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import checkIfAuthenticatedAsync from '../apis/Auth';

interface Props {
  exact: boolean;
  path: string;
}

class ProtectedRoute extends React.Component<Props> {
  state = { isAuthenticated: false };

  componentDidMount = async (): Promise<void> => {
    const isAuthenticated = await checkIfAuthenticatedAsync();
    this.setState(() => ({
      isAuthenticated: isAuthenticated,
    }));
  };

  render = (): React.ReactNode => {
    return this.state.isAuthenticated ? (
      <Route path={this.props.path} exact={this.props.exact}>
        {this.props.children}
      </Route>
    ) : (
      <Route path={this.props.path} exact={this.props.exact}>
        <Redirect to="/login" />
      </Route>
    );
  };
}

export default ProtectedRoute;
