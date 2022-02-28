import { combineReducers } from 'redux';

import { basketReducer, BasketState } from './basket-reducers';
import { productsReducer, ProductsState } from './products-reducer';

export type ApplicationState = {
    basket: BasketState,
    products: ProductsState
};

export const getReducers = () =>
    combineReducers<ApplicationState>({
        basket: basketReducer,
        products: productsReducer,
    });
