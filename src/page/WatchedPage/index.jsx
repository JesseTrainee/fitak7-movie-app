import React, { useEffect, useState } from "react";
import { Movies } from "../../components/Movies";
import storage from "../../utils/storage";


function WatchedPage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        handleMovies();
    },[])

    const handleMovies  = async () => {
        const watched = await storage.getWatched();
        setMovies(watched);
    }
    
  return (
    <div >
        <Movies movies={movies} />
    </div>
  );
}

export default WatchedPage;
