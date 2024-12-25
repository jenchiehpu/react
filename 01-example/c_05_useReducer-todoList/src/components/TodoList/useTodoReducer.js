import React, { useReducer } from 'react';

type TodoType = {
  id: string,
  text: string,
  done: boolean,
};

const initialState = {
  filterType: 'all',
  todoList: [
    { id: 'id1', text: '學會React', done: true },
    { id: 'id2', text: '學會Webpack', done: false },
    { id: 'id3', text: '年薪百萬', done: false },
  ],
};

// flowjs {
type State = typeof initialState;
type Action =
  | { type: 'filterType', filterType: string }
  | { type: 'addTodo', text: string }
  | { type: 'toggleTodo', id: string }
  | { type: 'deleteTodo', id: string };
// flowjs }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'filterType':
      return {
        ...state,
        filterType: action.filterType,
      };
    case 'addTodo': {
      const item: TodoType = {
        id: new Date().getTime().toString(),
        text: action.text,
        done: false,
      };
      return {
        ...state,
        todoList: state.todoList.concat(item),
      };
    }
    case 'toggleTodo': {
      const { todoList } = state;
      const { id } = action;
      const newList: TodoType[] = todoList.map((item: TodoType) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
      return {
        ...state,
        todoList: newList,
      };
    }
    case 'deleteTodo': {
      const { id } = action;
      const newList: TodoType[] = state.todoList.filter((item: TodoType) => item.id !== id);
      return {
        ...state,
        todoList: newList,
      };
    }
    default:
      return state;
  }
}

export default function useTodoReducer(): [State, React.Dispatch<Action>] {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}

export const dispatchDeleteTodo = (dispath: React.Dispatch<Action>, id: string) => {
  dispath({ type: 'deleteTodo', id });
};
