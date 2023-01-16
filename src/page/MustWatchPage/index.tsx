import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { MovieProps } from "../../ts/*.interface";
import storage from "../../utils/storage";

function MustWatchPage() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

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
