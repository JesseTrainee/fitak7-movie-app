import { useEffect, useState } from "react";
import { MovieProps } from '../../ts/*.interface';
// import storage from "../../utils/storage";
import { Watched } from "../Watched";
import { MustWatch } from "../MustWatch";
import "./styles.css";

interface CardProps {
  movie : MovieProps
}

export default function Card( {movie} : CardProps ) {

  const [watched, setWatched] = useState(false);
  const [mustWatch, setMustWatch] = useState(false);

  useEffect(() => {
  }, [watched, mustWatch]);

  return (
    <div className="movie">
      <h2 className="card-title">{movie.Title}</h2>
      <img src={movie.Poster}></img>
      <div className="card-footer">
        <h3>{movie.Year}</h3>

          <MustWatch
            mustWatch={mustWatch}
            setMustWatch={setMustWatch}
            movie={movie}
          />
       
          <Watched
            watched={watched}
            movie={movie}
            setWatched={setWatched}
          />
      </div>
    </div>
  );
}