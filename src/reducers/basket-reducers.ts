import { createReducer } from "typesafe-actions";

export type BasketState = {
  items: Array<{
    count: number;
    id: number;
  }>;
};

export const basketState: BasketState = {
  items: [],
};

export const basketReducer = createReducer(basketState);