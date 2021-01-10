const checkIfAuthenticatedAsync = async (): Promise<boolean> => {
  const response = await fetch('api/auth/check');
  const isAuthenticated = await response.json();

  return isAuthenticated;
};

export default checkIfAuthenticatedAsync;
