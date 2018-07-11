import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import MovieEditForm from './MovieEditForm'
import { editMovie } from '../actions';

class MovieEdit extends React.Component {

    render() {
        const { movie } = this.props;

        return <article className="movie__card">
            <Link to={'/movies/'}>
                <button>Back to list</button>
            </Link>
            <h2 className="movie__name" >{movie.title} (Edit mode)</h2>
            <MovieEditForm movie={movie} onSaveMovie={this.props.editMovie()} />
        </article>
    }
}

const mapStateToProps = (state, props) => ({
    movie: state.movies.find((movie) => movie.id == props.match.params.id)
})

const mapActionsToProps = (dispatch, props) => ({
    editMovie: () => (movie) => {
        dispatch(editMovie(movie));
        props.history.push(`/movies/${movie.id}`)
    }
})

export default connect(mapStateToProps, mapActionsToProps)(MovieEdit);