import api from './api';

const getMovies =  (title) => {
          return new Promise(async (resolve,reject) => {
            try {
                const response = await api.get(`/?s=${title}&apikey=27f86f3d`);
                return resolve(response.data.Search);
            } catch (error) {
                return reject(error);
            }
        });
}

export default {
    getMovies
}
