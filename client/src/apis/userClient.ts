export interface User {
  googleId?: string;
  teams?: Array<Team>;
  dateCreatedUtc?: Date;
  lastUpdatedUtc?: Date;
}

export interface Team {
  name?: string;
  players?: Array<string>;
  missions?: { number: number; attempts: number };
}

export const getUserDocumentAsync = async (): Promise<User> => {
  try {
    const response = await fetch('api/user');
    const user = (await response.json()) as User;
    return user;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const postUserDocumentAsync = async (user: User): Promise<User> => {
  try {
    const response = await fetch('api/user', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const updatedUser = (await response.json()) as User;
    return updatedUser;
  } catch (error) {
    console.error(error);
    return {};
  }
};
