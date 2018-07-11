const editMovie = (movies) => ({
    type: 'ADD_MOVIE',
    payload: movies
})

export default (newMovie) => {
    return (dispatch, getState) => {
        const movies = [...getState().movies, newMovie];
        dispatch(editMovie(movies));
    }
}