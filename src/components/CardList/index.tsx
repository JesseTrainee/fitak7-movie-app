import "./styles.css";
import Card from "../Card";
import { MovieProps } from '../../ts/*.interface';

interface CardListProps {
  movies: MovieProps[]
}

export const CardList = ( {movies} : CardListProps) => {
  return (
    <div className="movies">
      {movies
        ? movies.map((movie: MovieProps, index) => (
            <Card
              key={index}
              movie={movie}
            />
          ))
        : ""}
    </div>
  );
};
