import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import { App } from "./components/app/app";
import { products } from "./data/products";
import { ApplicationState } from "./reducers";

const rootElement = document.getElementById("root");
const initialState: ApplicationState = {
  products: {
    items: products,
  },
  basket: {
    items: [],
  },
};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
