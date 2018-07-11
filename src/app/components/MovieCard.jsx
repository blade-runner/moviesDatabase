import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) =>
    <article className="movie__card">
        <Link to={'/movies/'}>
            <button>Back to list</button>
        </Link>
        <h2 className="movie__name" >{movie.title}</h2>
        {
            movie.posterUrl && <img src={movie.posterUrl} />
        }
        <ul>
            <li>Дата выпуска: {movie.year}г.</li>
            <li>Режиссер: {movie.director}</li>
            <li>Продолжительность: {movie.runtime > 60 ? `${movie.runtime / 60 | 0} ч ${movie.runtime % 60} мин` : `${movie.runtime} мин`} </li>
            <li>{movie.plot}</li>
            <li>В ролях: {movie.actors}</li>
            <li>Жанр:
                <ul>
                    {
                        movie.genres.map((genre, i) => <li key={i}>{genre}</li>)
                    }
                </ul>
            </li>
        </ul>
        <ul className="movie__controls">
            <li>
                <Link to={`/movies/${movie.id}/edit`}>
                    <button>Edit</button>
                </Link>
            </li>
        </ul>
    </article>


const mapStateToProps = (state, props) => ({
    movie: state.movies.find((movie) => movie.id == props.match.params.id)

})
const mapActionsToProps = (dispatch) => ({
    selectMovie: (id) => () => { console.log(id) } // dispatch(selectMovie(id))
})
export default connect(mapStateToProps, mapActionsToProps)(MovieCard);