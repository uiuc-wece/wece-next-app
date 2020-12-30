import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer, { INITIAL_STATE } from "./authreducer.js";

export var store;

function initStore(preloadedState = INITIAL_STATE) {
  const config = {
    key: "root",
    storage: storage,
  };
  const persisted = persistReducer(config, reducer);
  return createStore(
    persisted,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === "undefined") return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
