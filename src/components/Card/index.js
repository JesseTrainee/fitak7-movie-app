import React, { useEffect, useState } from "react";
import storage from "../../utils/storage";
import Favorite from "../Favorite";
import "./styles.css";
function Card({ title, poster, year, id }) {
  const [favorite, setFavorite] = useState(false);
  const [watched, setWatched] = useState([]);
  const [mustwatch, setMustWatch] = useState([]);

  useEffect(() => {
  
  }, [favorite]);

  const handleFavorite = async () => {
    setFavorite(!favorite);
  };

  return (
    <div className="movie">
      <h2 className="card-title">{title}</h2>
      <img src={poster}></img>
      <div className="card-footer">
        <h3>{year}</h3>
        <button onClick={() => handleFavorite()}>
          <Favorite
            favorite={favorite}
            id={id}
            watched={watched}
            setWatched={setWatched}
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
