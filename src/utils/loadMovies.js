import api from '../utils/infoMovies';

export const loadMovies = async (movieTitle) =>  {
    const movies = await Promise.all(await api.getMovies("another"));
    console.log(movies)
    return movies
}

