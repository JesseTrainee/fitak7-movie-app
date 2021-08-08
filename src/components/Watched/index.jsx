import React, { useEffect, useState } from "react";
import storage from "../../utils/storage";

export const Watched = ({ setWatched, watched, movie }) => {
  useEffect(() => {}, [watched]);

  const handleWatched = async () => {
    console.log(watched);
    setWatched(await !watched);

    let moviesWatched = await storage.getWatched();
    if (watched) {
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
