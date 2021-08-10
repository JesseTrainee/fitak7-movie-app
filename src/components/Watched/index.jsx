import React, { useContext, useEffect, useState } from "react";
import storage from "../../utils/storage";
import { GlobalContext } from "../../context/Movie/index";
export const Watched = ({ setWatched, watched, movie }) => {
  const context = useContext(GlobalContext);
  useEffect(() => {

  }, [watched]);
  useEffect(() => {
    handleListMovie();
  }, []);

  const handleWatched = async () => {
    setWatched(await !watched);

    let moviesWatched = await storage.getWatched();
    if (watched) {
      context.setMovieReducer({ movie, mustWatch:false, watched }) ////aqui mudar
      if (moviesWatched) {
        moviesWatched.push(movie);
      } else {
        moviesWatched = [movie];
      }
      storage.saveWatched(await moviesWatched);
    } else {
      if (moviesWatched) {
        const deleted = await moviesWatched.filter(
          (e) => e.imdbID !== movie.imdbID
        );
        storage.saveWatched(deleted);
      }
    }
  };

  const handleListMovie = async () => {
    const cont = await context.state.movies;
    const watchContext = cont.filter( (e) => e.watched === true);
    console.log(cont)
    if (watchContext.length > 0) {
      watchContext.map((e) => {
        if (e.movie.imdbID === movie.imdbID) {
          setWatched(!watched);
        }
      });
    }
  };

  return (
    <>
      <button onClick={() => handleWatched()}>
        {watched ? (
          <i className="far fa-check-circle"></i>
        ) : (
          <i className="fas fa-check-circle"></i>
        )}
      </button>
    </>
  );
};
