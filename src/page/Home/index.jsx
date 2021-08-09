import React, {useEffect, useState } from "react";
import { Movies } from '../../components/Movies';


import { loadMovies } from "../../utils/loadMovies";

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
          <Movies movies={homeMovies}/>
      </div>
  )
}

export default Home;