import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const storeConfig = {
  blcklist: ["applicants"],
};

const reducers = persistReducer(persistConfig, rootReducer(history));

export default () => {
  const store = createStore(
    reducers, // root reducer with router state
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
      )
    )
  );
  const persistor = persistStore(store, storeConfig);
  return { persistor, store };
};
