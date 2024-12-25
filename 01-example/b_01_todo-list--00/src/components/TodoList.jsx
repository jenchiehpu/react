import { useState } from 'react';

import RenderTip from './RenderTip';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';

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
  const [filterType, setFilterType] = useState('all');

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

  const atFilterChange = (type: string) => {
    setFilterType(type);
  };

  const filtersList: TodoType[] = list.filter((todo: TodoType) => {
    if (filterType === 'completed') {
      return todo.done;
    }
    if (filterType === 'active') {
      return !todo.done;
    }
    return true;
  });
  return (
    <section className="todo-list" data-name="TodoList.js">
      <RenderTip />
      <TodoForm onAddItem={atAddItem} />
      <TodoFilter filterType={filterType} onFilterChange={atFilterChange} />
      <ul className="todo-items">
        {filtersList.map((item: TodoType) => (
          <TodoItem key={item.id} id={item.id} done={item.done} text={item.text} onToggleItem={atToggleItem} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
