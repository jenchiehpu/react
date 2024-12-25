// @flow
import React from 'react';

export const UPDATE_QUANTITY = 'updateQuantity';
export const ADD_TO_CART = 'addToCart';
export const REMOVE_ITEM = 'removeItem';
export const CLEAR_CART = 'clearCart';
//
export const LOADING = 'loading';
export const COMPLETE = 'complete';

// flow
export type Action =
  | { type: 'updateQuantity', payload: string }
  | { type: 'addToCart', payload: string }
  | { type: 'removeItem', payload: string }
  | { type: 'clearCart' }
  | { type: 'loading', payload: boolean };

export const updateQuantity = (dispatch: React.Dispatch<Action>, id: string) => {
  dispatch({ type: UPDATE_QUANTITY, payload: id });
};
export const addToCart = (dispatch, id: string) => {
  dispatch({ type: ADD_TO_CART, payload: id });
};
export const removeItem = (dispatch, id: string) => {
  dispatch({ type: REMOVE_ITEM, payload: id });
};
export const clearCart = (dispatch) => {
  dispatch({ type: CLEAR_CART });
};

const mockFetchAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

// TODO
export const thunk = () => {
  return async (dispatch: React.Dispatch<Action>) => {
    dispatch({ type: LOADING, payload: true });
    await mockFetchAPI();
    dispatch({ type: COMPLETE, payload: true });
    dispatch({ type: LOADING, payload: false });
  };
};
