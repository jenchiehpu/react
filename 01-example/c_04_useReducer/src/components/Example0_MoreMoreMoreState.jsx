import { useState } from 'react';

const mockFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('mockData');
    }, 1000);
  });
};

const MoreMoreMoreState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const atDoFetch = () => {
    setIsLoading(true);
    mockFetch()
      .then((result) => {
        setData(result);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setData(null);
        setError(err);
        setIsLoading(false);
      });
  };
  return (
    <section data-name="MoreMoreMoreState">
      <h1>isLoading:{isLoading.toString()}</h1>
      <h2>data:{data}</h2>
      <h2>error:{error}</h2>
      <button className="my-btn" onClick={atDoFetch}>
        atDoFetch
      </button>
    </section>
  );
};

export default MoreMoreMoreState;
