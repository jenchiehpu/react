import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { actionClearTodo } from '../actions';
import RenderTip from './RenderTip';

const TodoClear = () => {
  const { todos } = useSelector((state) => state);
  const count = todos.length; // bad
  // const count = useSelector((state) => state.todos.length); // good
  const dispatch = useDispatch();
  const atClear = React.useCallback(() => {
    dispatch(actionClearTodo());
  }, [dispatch]);
  return (
    <section data-name="TodoClear">
      <RenderTip />
      <span className="mr-3">Count:{count}</span>
      <button
        className={cx('btn btn-danger', {
          disabled: count === 0,
        })}
        onClick={atClear}
      >
        Clear
      </button>
    </section>
  );
};
export default React.memo(TodoClear);
