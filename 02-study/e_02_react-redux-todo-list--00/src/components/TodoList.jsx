import React from 'react';
import TodoItem from './TodoItem';

type TodoItemType = {
  id: string,
  text: string,
  done: boolean,
};
type TodoListProps = {
  userName: string,
  todos: TodoItemType[],
  onToggleItem: (id: string) => void,
};

const TodoList: React.FC<TodoListProps> = (props) => {
  const { userName, todos, onToggleItem, onDeleteItem } = props;

  return (
    <section className="todo-list" data-name="TodoList">
      <h3>user.name: {userName}</h3>
      <ul className="todo-items">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            done={item.done}
            text={item.text}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
