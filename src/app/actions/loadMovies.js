import MoviesApi from '../api/MoviesApi'
import { apiStarted, apiFinished, apiError } from './apiActions'

const moviesFetched = (data) => ({
    type: 'MOVIES_FETCHED',
    payload: data.movies
})

export default () => {
    return (dispatch) => {
        dispatch(apiStarted);
        return MoviesApi.getMovies()
            .then((movies) => dispatch(moviesFetched(movies)))
            .catch((error) => dispatch(apiError(error)))
    }
}