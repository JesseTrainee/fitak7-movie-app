import React, { useContext, useEffect } from "react";
import storage from "../../utils/storage";
import { GlobalContext } from "../../context/Movie/index";

export const Watched = ({ setWatched, watched, movie }) => {
  const context = useContext(GlobalContext);
  let isWatched = watched;

  useEffect(() => {
    changeWatchedIcon();
    fillMovieContext();
  }, []);

  /**
   * Change watched state
  */
  const changeWatchedState = async () => {
    setWatched(!watched);
    isWatched = !isWatched;
  }
  
  /**
   * Verify and fill movie context 
  */
  const fillMovieContext = async () => {
    const cont = await context.state.movies;
    let moviesWatched = await storage.getWatched();

    if (cont.length === 0 && moviesWatched) {
      moviesWatched.map((elem) => {
        context.setMovieReducer({ movie: elem, mustWatch:false, watched: true });
      })
    }
  }

  /**
   * Save watched movies on storage memory
  */
  const saveWatchedMovies = async (moviesWatched) => {
    
    if (isWatched) {
      context.setMovieReducer({ movie, mustWatch:false, watched: isWatched }) ////aqui mudar

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

        context.removeMovieReducer(movie.imdbID);
      }
    }
  }

  const handleWatched = async () => {
    // get movies from local storage
    let moviesWatched = await storage.getWatched();

    await changeWatchedState();
    saveWatchedMovies(moviesWatched);
  };

  const changeWatchedIcon = async () => {
    const cont = await context.state.movies;
    const watchContext = cont.filter( (e) => e.watched === true);

    if (watchContext.length > 0) {
      watchContext.map((e) => {
        if (e.movie.imdbID === movie.imdbID) {
          changeWatchedState();
        }
      });
    }
  };

  return (
    <>
      <button onClick={handleWatched}>
        {isWatched ? (
          <i className="fas fa-check-circle"></i>
        ) : (
          <i className="far fa-check-circle"></i>
        )}
      </button>
    </>
  );
};
