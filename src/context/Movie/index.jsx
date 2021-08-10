import { createContext, useReducer, useState } from "react";
import { movieState } from "./data";
import { reducer } from "./reducer";
export const GlobalContext = createContext();

export const MovieContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, movieState);

  const setMovieReducer = (payload) => {
    dispatch({ type: "MOVIES_LIST", payload });
  };
  // const setWatchInReducer = (payload) => {
  //     dispatch({ type: 'WATCH_LIST' , payload})
  // }

  return (
    <GlobalContext.Provider value={{ state, setMovieReducer }}>
      {children}
    </GlobalContext.Provider>
  );
};
