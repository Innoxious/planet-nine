export const verifyIsAuthenticatedAsync = async (): Promise<boolean> => {
  try {
    const response = await fetch('api/auth/check');
    const isAuthenticated = await response.json();
    return isAuthenticated;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const verifyIsNotAuthenticatedAsync = async (): Promise<boolean> => {
  try {
    const response = await fetch('api/auth/check');
    const isAuthenticated = await response.json();
    return !isAuthenticated;
  } catch (error) {
    console.error(error);
    return false;
  }
};
