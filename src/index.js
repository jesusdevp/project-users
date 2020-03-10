import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import thunk from "redux-thunk";
import reducers from "./reducers";

const history = createHistory();
const middleWare = [routerMiddleware(history), thunk];

const store = createStore(reducers, applyMiddleware(...middleWare));

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
