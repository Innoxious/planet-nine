const fetchDataAsync = async (): Promise<string> => {
  const response = await fetch('api/test/hello');
  const body = await response.json();
  return body.data;
};

export default fetchDataAsync;
