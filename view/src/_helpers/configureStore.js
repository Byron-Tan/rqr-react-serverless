import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
      )
    )
  );
  return store;
}
