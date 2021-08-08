import React, { useEffect, useState } from "react";
import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';
import { loadMovies } from "../../utils/loadMovies";
import './styles.css';
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    handleMovies();
  }, []);

  const handleMovies = async () => {
    setMovies(await loadMovies());
  };
 
  return(
      <div className="home-container">
          <Movies movies={movies}/>
      </div>
  )
}

export default Home;