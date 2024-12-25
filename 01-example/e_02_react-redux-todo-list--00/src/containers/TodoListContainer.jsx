import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from '@/components/TodoList';
import { actionToggleTodo, actionDeleteTodo } from '../actions';

const TodoListContainer = () => {
  const { todos, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const atToggleItem = useCallback(
    (id) => {
      dispatch(actionToggleTodo(id));
    },
    [dispatch],
  );
  const atDeleteItem = useCallback(
    (id) => {
      dispatch(actionDeleteTodo(id));
    },
    [dispatch],
  );

  return (
    // prettier-ignore
    <TodoList
      userName={user.name}
      todos={todos}
      onToggleItem={atToggleItem}
      onDeleteItem={atDeleteItem} />
  );
};
export default TodoListContainer;
