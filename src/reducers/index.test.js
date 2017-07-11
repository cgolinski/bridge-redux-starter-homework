import { ACTION_TYPES } from '../actions';
import { products } from './index';

  it('adds a product on ADD_PRODUCT', () => {
    const action = {
      type: ACTION_TYPES.addProduct,
      payload: {
        product: {
          name: 'Sofa',
        }
      }
    };
    expect(products([], action)).toEqual([{
      name: 'Sofa',
    }]);
  });

  it('removes a product on REMOVE_PRODUCT', () => {
    const action = {
      type: ACTION_TYPES.removeProduct,
      payload: {
        product: {
          id: '123',
          name: 'Sofa',
        }
      }
    };
    expect(products(
      [{
        id: '111',
        name: 'Chair',
      }, 
      {
        id: '222',
        name: 'Bed',
      }, 
      {
        id: '123',
        name: 'Sofa',
      }], action)).toEqual(
      [{
        id: '111',
        name: 'Chair',
      }, 
      {
        id: '222',
        name: 'Bed',
      }]
    );
  });