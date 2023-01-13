import React, { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
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
        <CardList movies={movies} />
    </div>
  );
}

export default MustWatchPage;
