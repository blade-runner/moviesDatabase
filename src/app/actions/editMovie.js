const editMovie = (movies) => ({
    type: 'EDIT_MOVIE',
    payload: movies
})

export default (editedMovie) => {
    return (dispatch, getState) => {
       const movies = getState().movies.map((movie) => movie.id == editedMovie.id ? {
            ...movie,
            ...editedMovie
        } : movie);
        dispatch(editMovie(movies));
    }
}