import api from '../utils/infoMovies';

export const loadMovies = async () =>  {
    const movies = await Promise.all(await api.getMovies("harry"));
    return movies
}

