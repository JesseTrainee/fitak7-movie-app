import React, {useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { loadMovies } from "../../utils/movies";

function Home() {
  const [homeMovies, setHomeMovies] = useState([]);

  useEffect(() => {
    handleMovies();
  }, []);

  const handleMovies = async () => {
    setHomeMovies(await loadMovies());
  };
 
  return(
      <div className="home-container">
          <CardList movies={homeMovies}/>
      </div>
  )
}

export default Home;