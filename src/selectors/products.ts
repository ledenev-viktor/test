import { ApplicationState } from "../reducers";

export const productsSelector = (state: ApplicationState) => state.products.items;