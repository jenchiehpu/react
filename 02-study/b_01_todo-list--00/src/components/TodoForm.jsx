import React, { useState } from 'react';
import RenderTip from '@/components/RenderTip';

type TodoFormProps = {
  onAddItem: (text: string) => void,
};
const TodoForm: React.FC<TodoFormProps> = (props) => {
  const { onAddItem } = props;
  /* // TODO

  const [input, setInput] = useState('');

  const atSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    setInput('');
    onAddItem(input);
  };
  // */

  return (
    <section className="style-1" data-name="TodoForm.js">
      <RenderTip />
      <form className="todo-form" onSubmit={atSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default TodoForm;
