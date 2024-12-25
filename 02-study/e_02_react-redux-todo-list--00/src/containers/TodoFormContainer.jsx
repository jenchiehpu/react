import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actionAddTodo } from '@/actions';
import TodoForm from '@/components/TodoForm';

const TodoFormContainer = () => {
  // TODO
  /* const dispatch = useDispatch();

  const atAddItem = useCallback(
    (text: string) => {
      dispatch(actionAddTodo(text));
    },
    [dispatch],
  );

  return <TodoForm onAddItem={atAddItem} />; */
};
export default TodoFormContainer;
