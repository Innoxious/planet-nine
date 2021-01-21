import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  checkIfAuthenticatedAsync,
  checkIfNotAuthenticatedAsync,
} from '../apis/Auth';

export enum AuthState {
  IsAuthenticated,
  IsNotAuthenticated,
}

interface Props {
  exact: boolean;
  path: string;
  failureRedirectSlug: string;
  requiredAuthState: AuthState;
}

export class ProtectedRoute extends React.Component<Props> {
  state = { isAuthorized: false };

  componentDidMount = async (): Promise<void> => {
    let isAuthorized = false;
    switch (this.props.requiredAuthState) {
      case AuthState.IsAuthenticated:
        isAuthorized = await checkIfAuthenticatedAsync();
        break;

      case AuthState.IsNotAuthenticated:
        isAuthorized = await checkIfNotAuthenticatedAsync();
        break;

      default:
        break;
    }
    this.setState({ isAuthorized });
  };

  render = (): React.ReactNode => {
    const { path, exact, failureRedirectSlug, children } = this.props;

    return this.state.isAuthorized ? (
      <Route path={path} exact={exact}>
        {children}
      </Route>
    ) : (
      <Route path={path} exact={exact}>
        <Redirect to={failureRedirectSlug} />
      </Route>
    );
  };
}
