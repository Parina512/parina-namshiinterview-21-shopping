import { ADD_ITEM_LIST, ADD_TO_CART } from './action-types';

export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const updateItemList = (payload) => {
  return { type: ADD_ITEM_LIST, payload };
};
