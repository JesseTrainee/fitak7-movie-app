import React, { useEffect, useContext } from "react";
import storage from "../../utils/storage";
import { GlobalContext } from "../../context/Movie/index";
import { Movies } from "../Movies";
export const MustWatch = ({ setMustWatch, mustWatch, movie }) => {
  const context = useContext(GlobalContext);

  useEffect(() => {}, [mustWatch]);

  useEffect(() => {
    handleListMovie();
  }, []);

  const handleMustWatch = async () => {
    const mustWatchContext = await context.state.movies;
    setMustWatch(!mustWatch);
    // let moviesMustWatch = await storage.getMustWatch();
    if (mustWatch) {
      context.setMovieInList({ movie, mustWatch });
      // if(moviesMustWatch){
      //     moviesMustWatch.push(movie)
      // }else{
      //     moviesMustWatch = [movie];

      //     storage.saveMustWatch(moviesMustWatch);
    } else {
      if (mustWatchContext > 0) {
        const deleted = await mustWatchContext.filter((e) => e.imdbID !== movie.imdbID);
        console.log(deleted)
        context.deleteMovieInList({ deleted, mustWatch });
        //         storage.saveMustWatch(deleted);
        //     }
      }
    }
  };

  const handleListMovie = async () => {
    //  console.log(await context.state.movies[0].movie.imdbID)

    const mustWatchContext = await context.state.movies;

    if (mustWatchContext.length > 0) {
      mustWatchContext.map((e) => {
        if (e.movie.imdbID === movie.imdbID) {
          setMustWatch(!mustWatch);
        }
      });
    }
  };

  return (
    <>
      <button onClick={() => handleMustWatch()}>
        {mustWatch ? (
          <i className="far fa-bookmark"></i>
        ) : (
          <i className="fas fa-bookmark"></i>
        )}
      </button>
    </>
  );
};
