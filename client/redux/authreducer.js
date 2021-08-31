import { AUTH_UPDATE, AUTH_PURGE } from "./authaction";
import storage from "redux-persist/lib/storage";

export const INITIAL_STATE = { authenticated: false };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_UPDATE:
      return { ...action.payload, authenticated: true };
    case AUTH_PURGE:
      state = INITIAL_STATE;
      storage.removeItem("persist:root");
    default:
      return state;
  }
};

export default reducer;
