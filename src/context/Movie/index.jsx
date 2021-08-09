import { createContext, useReducer, useState } from 'react';
import { movieState } from './data';
import {reducer}  from './reducer'
export const GlobalContext = createContext();

export const MovieContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer,movieState);

    const setMovieInList = (payload) => {
        dispatch({ type: 'SET_MOVIE_IN_LIST' , payload})
    }
    const deleteMovieInList = (payload) => {
        dispatch({ type: 'DELETE_MOVIE_IN_LIST' , payload})
    }
    
    return(
        <GlobalContext.Provider value={{ state , setMovieInList , deleteMovieInList}}>
            {children}
        </GlobalContext.Provider>
    )
}