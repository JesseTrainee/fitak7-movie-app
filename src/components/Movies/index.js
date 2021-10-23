import React,{ useEffect, useState } from "react";
import "./styles.css";
import Card from "../../components/Card";
import { Pagination } from "../Pagination";

const LIMIT = 4245;
export const Movies = ({ movies }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    
  },[offset])
  return (
    <div className="movies">
      {!movies && <span>Carregando...</span>}
      {movies && movies.map((movie, index) => (
            <Card
              key={index}
              movie={movie}
            />
          ))
      }
      <Pagination
       limit={LIMIT}
       total={movies.length}
       offset={offset}
       setOffset={setOffset}
      /> 
    </div>
  )
};
