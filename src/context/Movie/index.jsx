import { createContext, useReducer, useState } from "react";
import { movieState } from "./data";
import { reducer } from "./reducer";
export const GlobalContext = createContext();

export const MovieContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, movieState);

  const setMovieReducer = (payload) => {
    dispatch({ type: "ADD_MOVIE", payload });
  };

  const removeMovieReducer = (id) => {
      dispatch({ type: 'REMOVE_MOVIE' , id})
  }

  return (
    <GlobalContext.Provider value={{ state, setMovieReducer, removeMovieReducer }}>
      {children}
    </GlobalContext.Provider>
  );
};
