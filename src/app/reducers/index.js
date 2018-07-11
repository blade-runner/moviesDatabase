import { combineReducers } from 'redux';

const apiLoading = (state = null, action) => {
    if (action.type === 'API_LOAD_STARTED') {
        return true;
    }
    if (action.type === 'API_LOAD_FINISHED' || action.type === 'API_LOAD_ERROR') {
        return false;
    }
    return state;
}

const apiError = (state = null, action) => {
    if (action.type === 'API_LOAD_ERROR') {
        return action.payload;
    }
    return null;
}

const movies = (state = null, action) => {
    if (['MOVIES_FETCHED', 'ADD_MOVIE', 'EDIT_MOVIE'].indexOf(action.type) !== -1) {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    apiLoading,
    apiError,
    movies
});