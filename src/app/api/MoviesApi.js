
import  movies from './data.json'

class MoviesApi {

    constructor() {

    }

    getMovies() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(movies);
            }, 1000);
          })
    }

}

export default new MoviesApi()