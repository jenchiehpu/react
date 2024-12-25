import React from 'react';
import cx from 'classnames';
import style from './TodoItem.module.scss';

type TodoItemProps = {
  id: string,
  done: boolean,
  text: string,
  onToggleItem: (id: string) => void,
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { id, text, done, onToggleItem } = props;

  const atClick = () => {
    onToggleItem(id);
  };

  return (
    <section data-name="TodoItem" className="style-2">
      <li
        data-active={done}
        className={style.todoItem}
        onClick={atClick}
        data-testid="li"
      >
        {text}
      </li>
      <button className={cx('btn btn-danger', style.btn)}>Delete</button>
    </section>
  );
};

export default React.memo(TodoItem);
