import React from "react";
import "./styles.css";
import Card from "../../components/Card";

export const Movies = ({movies}) => {

  return (
    <div className="movies">
      {movies.map((movie, index) => (
        <Card
          key={index}
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
          id={movie.imdbID}
        />
      ))}
    </div>
  );
};
