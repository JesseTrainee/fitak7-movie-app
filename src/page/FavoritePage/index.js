import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { Movies } from "../../components/Movies";
import storage from "../../utils/storage";


function FavoritePage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {

    },[])

    const handleMovies  = async () => {
        const watched = await storage.getWatched();
        setMovies(watched);
    }
  return (
    <div className="favorite-container">
        <Movies movies={movies} />
    </div>
  );
}

export default FavoritePage;
