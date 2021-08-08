import React, { useEffect, useState } from "react";
import { Movies } from "../../components/Movies";
import storage from "../../utils/storage";


function MustWatchPage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        handleMovies();
    },[])

    const handleMovies  = async () => {
        const mustWatch = await storage.getMustWatch();
        setMovies(mustWatch);
    }
    
  return (
    <div >
        <Movies movies={movies} />
    </div>
  );
}

export default MustWatchPage;
