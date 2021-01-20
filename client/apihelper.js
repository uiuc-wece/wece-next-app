import { store } from "./redux/store";
import { authUpdateAction, authPurgeAction } from "./redux/authaction.js";
import axios from "axios";
import { base_url } from "./constants.js";

export const updateAuthState = (payload) => {
  store.dispatch(authUpdateAction(payload));
  if (process.env.NODE_ENV === "development") {
    console.log("payload:", payload);
  }
};

export const purgeAuthState = () => {
  store.dispatch(authPurgeAction());
};

export const refreshAuth = async () => {
  try {
    const response = await axios.get(base_url + "/user", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    const user = response.data;
    updateAuthState(user);
  } catch (err) {
    purgeAuthState();
  }
};

export const logout = () => {
  axios
    .get(base_url + "/logout")
    .then((res) => {
      console.log("logout res:", res);
      purgeAuthState();
    })
    .catch((err) => {
      console.log("logout err:", err);
      purgeAuthState();
    });
};
