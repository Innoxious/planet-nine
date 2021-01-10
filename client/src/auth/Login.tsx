import * as React from 'react';

const Login: React.FC = () => {
  const loginOnClick = React.useCallback(() => {
    location.href = '/api/auth/google';
  }, []);

  return (
    <div className="text-center">
      <button type="button" className="btn btn-primary" onClick={loginOnClick}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
