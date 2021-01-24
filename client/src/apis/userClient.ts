export interface User {
  googleId?: string;
  teams?: Array<Team>;
}

export interface Team {
  name?: string;
  players?: Array<string>;
  missions?: Array<{ number: number; attempts: number }>;
}

interface PostUserDocumentResponse {
  success: boolean;
  updatedUser?: User;
  errorMessage?: string;
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

export const postUserDocumentAsync = async (
  user: User,
): Promise<PostUserDocumentResponse> => {
  try {
    const response = await fetch('api/user', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const updatedUser = (await response.json()) as User;
      return { success: true, updatedUser };
    }
    return { success: false, errorMessage: await response.text() };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
