import api from './api';

export const loadMovies = async () =>  {
    const movies = await Promise.all(await getMovies("harry"));
    return movies;
}

const getMovies =  (title) => {
    return new Promise(async (resolve,reject) => {
      try {
          const response = await api.get(`/?s=${title}&page=1&apikey=27f86f3d`);
          return resolve(response.data.Search);
      } catch (error) {
          return reject(error);
      }
  });
}

