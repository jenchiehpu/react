import { combineReducers } from 'redux';
import todos from './todos';
import user from './user';

const todoApp = combineReducers({
  todos,
  user,
});

//* // flowjs
// eslint-disable-next-line
export type StoreTypes = ReturnType<typeof todoApp>;
// */

export default todoApp;
