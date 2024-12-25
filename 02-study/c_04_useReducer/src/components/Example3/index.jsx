import { useFetch } from './useFetch';

const fatchJSONHolder = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
};

const UseFetchExample = () => {
  const { state, data } = useFetch(fatchJSONHolder);
  return (
    <section data-name="UseFetchExample">
      <h1>state:{state}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};

export default UseFetchExample;
