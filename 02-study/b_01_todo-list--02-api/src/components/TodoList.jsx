import React, { useState, useCallback, useMemo, useEffect } from 'react';

import axios from 'axios';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';

type TodoType = {
  id: string,
  text: string,
  done: boolean,
};

type TodoListProps = {
  apiURL: string,
};

const TodoList: React.FC<TodoListProps> = (props) => {
  const { apiURL } = props;
  const [list, setList] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    /* // TODO 1
    axios.get(apiURL).then((response) => {
      setList(response.data);
    });
    // */
  }, []);

  
  const atAddItem = React.useCallback((text: string) => {
    /* // TODO 2
    axios({
      method: 'POST',
      url: apiURL,
      data: {
        text,
      },
    }).then((response) => {
      const { data } = response;
      setList((prev) => prev.concat(data));
    });
    // */
  }, []);

  const atToggleItem = useCallback((id: string) => {
    /* // TODO 3
    axios({
      method: 'PUT',
      url: apiURL,
      data: { id },
    }).then((response) => {
      const { data } = response;
      setList(data);
    });
    // */
  }, []);

  const atFilterChange = useCallback((type: string) => {
    setFilterType(type);
  }, []);

  const filtersList: TodoType[] = useMemo(() => {
    return list.filter((todo: TodoType) => {
      if (filterType === 'completed') {
        return todo.done;
      }
      if (filterType === 'active') {
        return !todo.done;
      }
      return true;
    });
  }, [filterType, list]);

  return (
    <section className="todo-list" data-name="TodoList">
      <TodoForm onAddItem={atAddItem} />
      <TodoFilter
        filterType={filterType}
        onFilterChange={atFilterChange}
        totalTodoCount={list.length}
        currentTodoCount={filtersList.length}
      />
      <ul className="todo-items">
        {filtersList.map((item: TodoType) => (
          <TodoItem key={item.id} id={item.id} done={item.done} text={item.text} onToggleItem={atToggleItem} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
