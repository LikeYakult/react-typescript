import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from "../reducers";

const loggerMiddleware = createLogger();

const store = (preloadedState?: any) => createStore(
  reducers,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  )
);

export default store();
