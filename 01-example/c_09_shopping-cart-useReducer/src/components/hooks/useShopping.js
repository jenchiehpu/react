import React, { useReducer } from 'react';
import type { LineItem } from '../ShoppingCart/types';
import { PRODUCTS } from '../ShoppingCart/config';

import * as ACTIONS from './shoppingActions';
import type { Action } from './shoppingActions';
// import { UPDATE_QUANTITY, REMOVE_ITEM } from './shoppingActions';

type ShoppingState = {
  isLoading: boolean,
  cart: LineItem[],
  totalPrice: number,
};

const atUpdateQuantity = (cart: LineItem[], id: string): LineItem[] => {
  return cart.map((item: LineItem) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });
};
const calcTotalPriceInCart = (cart: LineItem[]) => {
  return cart.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);
};

const shoppingReducer = (state: ShoppingState, action: Action) => {
  console.log(action);
  switch (action.type) {
    case ACTIONS.UPDATE_QUANTITY: {
      const newCart = atUpdateQuantity(state.cart, action.payload);
      const totalPrice = calcTotalPriceInCart(newCart);
      return {
        ...state,
        cart: newCart,
        totalPrice,
      };
    }
    case ACTIONS.ADD_TO_CART: {
      const { payload: id } = action;
      let newCart = state.cart;

      const foundItem = state.cart.find((data) => data.id === id);
      if (foundItem) {
        newCart = atUpdateQuantity(newCart, id);
      } else {
        // 新增\
        const foundOriginItem = PRODUCTS.find((data) => data.id === id);

        const lineItem = {
          id,
          price: foundOriginItem.price,
          title: foundOriginItem.title,
          quantity: 1,
        };
        newCart = newCart.concat(lineItem);
      }
      const totalPrice = calcTotalPriceInCart(newCart);
      return {
        ...state,
        cart: newCart,
        totalPrice,
      };
    }
    case ACTIONS.REMOVE_ITEM: {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      const totalPrice = calcTotalPriceInCart(newCart);
      return {
        ...state,
        cart: newCart,
        totalPrice,
      };
    }
    case ACTIONS.CLEAR_CART:
      return {
        ...state,
        cart: [],
        totalPrice: 0,
      };
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ACTIONS.COMPLETE:
      return {
        ...state,
        cart: [],
        totalPrice: 0,
        isLoading: false,
      };
    default:
      return state;
  }
};

const initialState: ShoppingState = {
  isLoading: false,
  cart: [],
  totalPrice: 0,
};

// https://nishan.dev/blog/usereducer-with-redux-devtools
export default function useShopping(): [ShoppingState, React.Dispatch<Action>] {
  // return React.useReducer(shoppingReducer, initialState);
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const customDispatch = (action) => {
    if (typeof action === 'function') {
      action(customDispatch);
    } else {
      dispatch(action);
    }
  };
  return [state, customDispatch];
}
