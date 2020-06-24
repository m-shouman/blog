import React, { ProviderProps, useReducer } from "react";
import { AppContext, initialState } from "./app-context";
import { appReducer } from "./app-reducer";
import { AppState } from "./app-state";

export const StateProvider = (props: any) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, ...dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
