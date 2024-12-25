import { useCallback, useMemo } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import useTodoReducer, { dispatchDeleteTodo } from './useTodoReducer';

const TodoList = () => {
  const [state, dispatch] = useTodoReducer();

  const atAddItem = useCallback((text: string) => {
    dispatch({ type: 'addTodo', text });
  }, []);

  const atToggleItem = useCallback((id: string) => {
    dispatch({ type: 'toggleTodo', id });
  }, []);

  const atDeleteItem = useCallback((id: string) => {
    dispatchDeleteTodo(dispatch, id);
  }, []);

  const atFilterChange = useCallback((type: string) => {
    dispatch({ type: 'filterType', filterType: type });
  }, []);

  const { todoList, filterType } = state;

  const filtersList = useMemo(() => {
    const filterResult = todoList.filter((todo) => {
      if (filterType === 'completed') {
        return todo.done;
      }
      if (filterType === 'active') {
        return !todo.done;
      }
      return true;
    });
    return filterResult;
  }, [filterType, todoList]);

  return (
    <section className="todo-list" data-name="TodoList.js">
      <TodoForm onAddItem={atAddItem} />
      <TodoFilter filterType={state.filterType} onFilterChange={atFilterChange} />
      <ul className="todo-items">
        {filtersList.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              done={item.done}
              onToggleItem={atToggleItem}
              onDeleteItem={atDeleteItem}
              text={item.text}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default TodoList;
