import React, { useRef, memo } from 'react';
import RenderTip from '@/components/RenderTip';

type TodoFormProps = {
  onAddItem: (text: string) => void,
};

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const inputRef = useRef(null);
  const atSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text === '') {
      return;
    }
    inputRef.current.value = '';
    props.onAddItem(text);
  };

  return (
    <section className="style-1" data-name="TodoForm">
      <RenderTip />
      <form className="todo-form" onSubmit={atSubmit}>
        <h3>TodoFom.js</h3>
        <input type="text" ref={inputRef} />
      </form>
    </section>
  );
};

export default memo(TodoForm);
