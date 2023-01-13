import React, { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
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
        <CardList movies={movies} />
    </div>
  );
}

export default WatchedPage;
