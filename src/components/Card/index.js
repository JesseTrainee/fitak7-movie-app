import React, { useEffect, useState } from "react";
// import storage from "../../utils/storage";
import { Watched } from "../Watched";
import { MustWatch } from "../MustWatch";
import "./styles.css";
function Card(props) {
  const [watched, setWatched] = useState(true);
  const [mustWatch, setMustWatch] = useState(true);

  useEffect(() => {
  }, [watched, mustWatch]);


  return (
    <div className="movie">
      <h2 className="card-title">{props.movie.Title}</h2>
      <img src={props.movie.Poster}></img>
      <div className="card-footer">
        <h3>{props.movie.Year}</h3>

  
          <MustWatch
          mustWatch={mustWatch}
          setMustWatch={setMustWatch}
          movie={props.movie}
          />
       
          <Watched
            watched={watched}
            movie={props.movie}
            setWatched={setWatched}
          />
     

      </div>
    </div>
  );
}

export default Card;
