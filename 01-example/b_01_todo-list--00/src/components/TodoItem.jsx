import React from 'react';
import RenderTip from '@/components/RenderTip';

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

  let className = 'todo-item';
  if (done) {
    className += ' done';
  }
  return (
    <section data-name="TodoItem" className="style-2">
      <RenderTip />
      <li className={className} onClick={atClick}>
        {text}
      </li>
    </section>
  );
};

export default TodoItem;
