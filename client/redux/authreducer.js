import { AUTH_UPDATE, AUTH_PURGE } from "./authaction";

export const INITIAL_STATE = { authenticated: false };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_UPDATE:
      return { ...action.payload, authenticated: true };
    case AUTH_PURGE:
    default:
      return state;
  }
};

export default reducer;
