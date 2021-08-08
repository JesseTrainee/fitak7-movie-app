import React, { useEffect, useState } from "react";
import storage from "../../utils/storage";

const Favorite = ({ favorite, id, watched, setWatched }) => {

  useEffect(() => {
    handleFavorite();
  }, [favorite]);

  const handleFavorite = async (e) => {
    if(favorite){
        storage.saveID(id);
        let w = await storage.getWatched();
        if(w){
          w.push(id)
        }else{
          w = [id];
        }
        storage.saveWatched(w);
    }
  };

  return (
    <>
      {favorite ? (
        <i class="fas fa-check-circle"></i>
      ) : (
        <i class="far fa-check-circle"></i>
      )}
    </>
  );
};

export default Favorite;
