import { combineReducers } from 'redux';

import { generateProducts } from '../utils/data';
import { ACTION_TYPES } from '../actions';

const INITIAL_STATE = {
  products: generateProducts(10),
};

export const products = (state = INITIAL_STATE.products, { type, payload }) => {
  // debugger;
  switch (type) {
    case ACTION_TYPES.addProduct:
      // debugger;
      return [...state, payload.product];
    case ACTION_TYPES.removeProduct:
      return state.filter((product) => {
        console.log('product: ', product);
        return product.id !== payload.product.id;
      });
    default: return state;
  }

  // return state;
};

export default combineReducers({
  products,
});
