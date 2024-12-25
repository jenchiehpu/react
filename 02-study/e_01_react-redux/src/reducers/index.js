import { combineReducers } from 'redux';
import count from './count';
import userInfo from './userInfo';

const reducers = combineReducers({
  count,
  userInfo,
});

// flow
// export type StoreTypes = ReturnType<typeof reducers>;

export default reducers;
