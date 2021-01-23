import * as React from 'react';
import { User } from '../apis/userClient';

const UserContext = React.createContext({
  user: {} as User,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: (user: User): void => {
    return;
  },
});

export default UserContext;
