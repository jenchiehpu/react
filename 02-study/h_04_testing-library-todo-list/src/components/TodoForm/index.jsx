import React, { useRef } from 'react';

import './TodoForm.scss';

type TodoFormProps = {
  onAddItem: (text: string) => void,
};

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const { onAddItem } = props;
  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
  const inputRef = useRef(null);

  const atSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text === '') {
      return;
    }
    inputRef.current.value = '';
    onAddItem(text);
  };

  return (
    <section className="style-1" data-name="TodoForm.js">
      {/* TODO 加 data-testid  */}
      <form className="todo-form" onSubmit={atSubmit} data-testid="form">
        <input type="text" ref={inputRef} data-testid="input" />
      </form>
    </section>
  );
};
export default TodoForm;
