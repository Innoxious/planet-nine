import * as React from 'react';
import { User } from '../apis/userClient';

const UserContext = React.createContext({
  user: {} as User,
  updateUser: (user: User): void => {
    return;
  },
});

export default UserContext;
