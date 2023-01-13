import React, { useEffect, useContext } from "react";
import storage from "../../utils/storage";
import { GlobalContext } from "../../context/Movie/index";

export const MustWatch = ({ setMustWatch, mustWatch, movie }) => {
  const context = useContext(GlobalContext);
  let isMustWatch = mustWatch;

  useEffect(() => {
    changeMustWatchIcon();
    fillMovieContext();
  }, []);

  /**
   * Change mustWatch state
  */
  const changeMustWatchState = async () => {
    setMustWatch(!mustWatch);
    isMustWatch = !isMustWatch;
  }
  
  /**
   * Verify and fill movie context 
  */
  const fillMovieContext = async () => {
    const cont = await context.state.movies;
    let moviesMustWatch = await storage.getMustWatch();

    if (cont.length === 0 && moviesMustWatch) {
      moviesMustWatch.map((elem) => {
        context.setMovieReducer({ movie: elem, watched:false, mustWatch: true });
      })
    }
  }

  /**
   * Save mustWatch movies on storage memory
  */
  const saveMustWatchMovies = async (moviesMustWatch) => {
    
    if (isMustWatch) {
      context.setMovieReducer({ movie, watched:false, mustWatch: isMustWatch }) ////aqui mudar

      if (moviesMustWatch) {
        moviesMustWatch.push(movie);
      } else {
        moviesMustWatch = [movie];
      }

      storage.saveMustWatch(await moviesMustWatch);
    } else {
      if (moviesMustWatch) {
        const deleted = await moviesMustWatch.filter(
          (e) => e.imdbID !== movie.imdbID
        );
        storage.saveMustWatch(deleted);

        context.removeMovieReducer(movie.imdbID);
      }
    }
  }

  const handleMustWatch = async () => {
    // get movies from local storage
    let moviesMustWatch = await storage.getMustWatch();

    await changeMustWatchState();
    saveMustWatchMovies(moviesMustWatch);
  };

  const changeMustWatchIcon = async () => {
    const cont = await context.state.movies;
    const watchContext = cont.filter( (e) => e.mustWatch === true);

    if (watchContext.length > 0) {
      watchContext.map((e) => {
        if (e.movie.imdbID === movie.imdbID) {
          changeMustWatchState();
        }
      });
    }
  };

  return (
    <>
      <button onClick={() => handleMustWatch()}>
        {isMustWatch ? (
          <i className="fas fa-bookmark"></i>
        ) : (
          <i className="far fa-bookmark"></i>
        )}
      </button>
    </>
  );
};
