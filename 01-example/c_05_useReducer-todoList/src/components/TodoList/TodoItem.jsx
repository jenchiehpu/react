import React, { memo } from 'react';
import RenderTip from '@/components/RenderTip';

type TodoItemProps = {
  id: string,
  done: boolean,
  text: string,
  onToggleItem: (id: string) => void,
  onDeleteItem: (id: string) => void,
  children: React.ReactNode,
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { id, done, onToggleItem, onDeleteItem, text } = props;

  const onClick = () => onToggleItem(id);
  const atDelteClick = () => onDeleteItem(id);

  let className = 'todo-item';
  if (done) {
    className += ' done';
  }
  return (
    <section data-name="TodoItem" className="style-2">
      <RenderTip />
      <li className={className} onClick={onClick}>
        {text}
      </li>
      <button className="btn btn-danger" onClick={atDelteClick}>
        Delete
      </button>
    </section>
  );
};

export default memo(TodoItem);
