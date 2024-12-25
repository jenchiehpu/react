import { combineReducers } from 'redux';
import count from './count';
import userInfo from './userInfo';

const reducers = combineReducers({
  count,
  userInfo,
});

export default reducers;
