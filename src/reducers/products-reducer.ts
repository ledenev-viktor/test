import { createReducer } from 'typesafe-actions';
import {Product} from '../types/product';


export type ProductsState = {
    items: Product[],
  };
  
  export const productsState: ProductsState = {
    items: [],
  };
  
  export const productsReducer = createReducer(productsState);