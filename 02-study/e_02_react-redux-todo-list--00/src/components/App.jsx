import TodoFormContainer from '@/containers/TodoFormContainer';
import TodoListContainer from '@/containers/TodoListContainer';
import TodoClear from './TodoClear';

const App = () => {
  return (
    <div className="app container">
      <TodoFormContainer />
      <TodoListContainer />
      <TodoClear />
    </div>
  );
};

export default App;
