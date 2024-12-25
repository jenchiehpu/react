import useFetch from './useFetch';

const Example = () => {
  const { data, isLoading } = useFetch('/api/todos');

  return (
    <section data-name="Example">
      <div>isLoading:{`${isLoading}`}</div>
      <pre>data:{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};

export default Example;
