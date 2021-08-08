import React, { useEffect, useState } from "react";
import storage from "../../utils/storage";

export const MustWatch = ({ setMustWatch, mustWatch, movie}) => {

  useEffect(() => {
   
  }, [mustWatch]);

  const handleMustWatch = async () => {
    setMustWatch(!mustWatch)
    let moviesMustWatch = await storage.getMustWatch();
    if(mustWatch){
        if(moviesMustWatch){
            moviesMustWatch.push(movie)
        }else{
            moviesMustWatch = [movie];
        }
        storage.saveMustWatch(moviesMustWatch);
    }else{
        if(moviesMustWatch){
            const deleted = await moviesMustWatch.filter(e => e.imdbID !== movie.imdbID);
            storage.saveMustWatch(deleted);
        }
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

