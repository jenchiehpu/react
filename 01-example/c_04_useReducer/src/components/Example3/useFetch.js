import { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'setData':
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false,
      };
    case 'changeError':
      return {
        ...state,
        data: null,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

/**
 * @param {()=> Promise} fetcher
 * @returns
 */
export const useFetch = (fetcher) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    fetcher()
      .then((result) => {
        dispatch({ type: 'setData', payload: result });
      })
      .catch((err) => {
        dispatch({ type: 'setError', payload: err });
      });
  }, []);

  return state;
};
