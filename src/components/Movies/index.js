import React from "react";
import "./styles.css";
import Card from "../../components/Card";

export const Movies = ({ movies }) => {
  return (
    <div className="movies">
      {movies
        ? movies.map((movie, index) => (
            <Card
              key={index}
              movie={movie}
            />
          ))
        : ""}
    </div>
  );
};
