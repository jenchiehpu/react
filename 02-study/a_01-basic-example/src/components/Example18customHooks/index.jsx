import { useFetchTodos } from './hooks/useFetchTodos';

const CustomHooks = () => {
  const { isLoading, lists } = useFetchTodos();
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section data-name="Example18customHooks">
      <ul>
        {lists.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </section>
  );
};
export default CustomHooks;
