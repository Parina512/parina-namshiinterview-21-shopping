import {
  ADD_CATEGORY_LIST,
  ADD_ITEM_LIST,
  ADD_TO_CART,
} from '../actions/action-types';

const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { filter } = state;
      const newFilter = { ...filter, ...action.payload };
      return { ...state, filter: newFilter };
    case ADD_ITEM_LIST:
      return { ...state, selectedCategoryProducts: action.payload };
    case ADD_CATEGORY_LIST:
      return { ...state, categoryList: action.payload };

    default:
      return state;
  }
};

export default itemReducer;
