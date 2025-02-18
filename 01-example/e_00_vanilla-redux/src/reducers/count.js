export default function count(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'SET_VALUE':
      return action.value;
    default:
      return state;
  }
}
