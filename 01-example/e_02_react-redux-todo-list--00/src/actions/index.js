export const actionAddTodo = (text: string) => ({
  type: 'ADD_TODO',
  text,
});

export const actionClearTodo = () => ({
  type: 'CLEAR_TODO',
});

export const actionToggleTodo = (id: string) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const actionDeleteTodo = (id: string) => ({
  type: 'DELETE_TODO',
  id,
});
