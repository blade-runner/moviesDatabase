import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import MovieEditForm from './MovieEditForm'
import { editMovie } from '../actions';

class MovieNew extends React.Component {

    render() {
        const movie = {
            id: this.props.newId,
            title: '',
            year: '',
            runtime: '',
            genres: [],
            director: '',
            actors: '',
            plot: '',
            posterUrl: ''
        };

        return <article className="movie__card">
            <Link to={'/movies/'}>
                <button>Back to list</button>
            </Link>
            <h2 className="movie__name" >Add new moview</h2>
            <MovieEditForm movie={movie} onSaveMovie={this.props.addMovie()} />
        </article>
    }
}

const mapStateToProps = (state, props) => ({
    newId: state.movies.slice(-1)[0].id
})

const mapActionsToProps = (dispatch, props) => ({
    addMovie: () => (movie) => {
        dispatch(editMovie(movie));
        props.history.push(`/movies/${movie.id}`)
    }
})

export default connect(mapStateToProps, mapActionsToProps)(MovieNew);