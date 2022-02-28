import { createStore } from "redux";
import { ApplicationState, getReducers } from "../reducers";
import { devToolsEnhancer } from '@redux-devtools/extension';

export function configureStore(initialState:ApplicationState) {
  const state = {
    ...initialState,
  };

  const store = createStore(getReducers(), state, devToolsEnhancer());

  return store;
}
