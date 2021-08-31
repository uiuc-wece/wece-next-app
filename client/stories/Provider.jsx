import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "../redux/store";

export default function Provider({ story }) {
  const store = useStore();
  return <ReduxProvider store={store}>{story}</ReduxProvider>;
}
