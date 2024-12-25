/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import TodoForm from '@/components/TodoForm';
import TodoItem from '@/components/TodoItem';

type TodoType = {
  id: string,
  text: string,
  done: boolean,
};

const initialList: TodoType[] = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '學會Webpack', done: false },
  { id: 'id3', text: '年薪百萬', done: false },
];
const TodoList = () => {
  const [list, setList] = useState(initialList);

  const atAddItem = (text: string) => {
    const item: TodoType = {
      id: new Date().getTime().toString(),
      text,
      done: false,
    };
    setList(list.concat(item));
  };

  const atToggleItem = (id: string) => {
    const newList: TodoType[] = list.map((item: TodoType) => {
      if (item.id === id) {
        return {
          id: item.id,
          text: item.text,
          done: !item.done,
        };
      }
      return item;
    });
    setList(newList);
  };
  return (
    <section className="todo-list" data-name="TodoList.js">
      <TodoForm onAddItem={atAddItem} />
      <ul className="todo-items">
        {list.map((item: TodoType) => (
          <TodoItem key={item.id} {...item} onToggleItem={atToggleItem} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
