import { createContext, useReducer, useState } from "react";
import { movieState } from "./data";
import { reducer } from "./reducer";
export const GlobalContext = createContext();

export const MovieContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, movieState);

  const setMovieReducer = (payload) => {
    dispatch({ type: "MOVIES_LIST", payload });
  };
  const deleteMovieInList = (payload) => {
      dispatch({ type: 'DELETE_MOVIE_IN_LIST' , payload})
  }

  return (
    <GlobalContext.Provider value={{ state, setMovieReducer , deleteMovieInList }}>
      {children}
    </GlobalContext.Provider> 
  );
};
