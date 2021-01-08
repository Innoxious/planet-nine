import * as React from 'react';

const Header: React.FC = () => {
  const [response, setResponse] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('api/hello');
      const body = await response.json();

      setResponse(body.data);
    };

    fetchData();
  }, []);
  return <h1 className="text-center">{response}</h1>;
};

export default Header;
