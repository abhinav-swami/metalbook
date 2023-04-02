import { createStore, compose, combineReducers } from "redux";

import friends from "./reducers/friends";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  friends,
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
