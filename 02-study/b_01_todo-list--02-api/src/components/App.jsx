import TodoList from './TodoList';

const App = () => {
  return (
    <div className="app container">
      <TodoList apiURL="/api/list/這裡要換上你的英文字名喔，啾咪" />
    </div>
  );
};

export default App;
