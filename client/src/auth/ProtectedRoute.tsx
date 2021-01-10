import * as React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  exact: boolean;
  path: string;
  isAuthenticated: boolean;
  render: () => JSX.Element;
}

const ProtectedRoute: React.FC<Props> = (props: Props) => {
  return props.isAuthenticated ? (
    <Route exact={props.exact} path={props.path} render={props.render} />
  ) : (
    <React.Fragment />
  );
};

export default ProtectedRoute;
