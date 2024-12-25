/* eslint-disable default-param-last */
import { INCREASE, DECREASE } from '@/actions';

export default function count(state: number = 10, action) {
  switch (action.type) {
    case INCREASE: {
      return state + 1;
    }
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
