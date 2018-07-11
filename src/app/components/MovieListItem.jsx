import React from 'react'
import { Link } from 'react-router-dom';

const MovieListItem = ({ movie, select }) =>
    <Link to={`/movies/${movie.id}`}>
        <article className="movie__link" >
            <h3 className="movie__name" >{movie.title}</h3>
            {
                movie.posterUrl && <img src={movie.posterUrl} />
            }
            <ul>
                <li>Дата выпуска: {movie.year}г.</li>
                <li>Режиссер: {movie.director}</li>
                <li>Продолжительность: {movie.runtime > 60 ? `${movie.runtime / 60 | 0} ч ${movie.runtime % 60} мин` : `${movie.runtime} мин`} </li>
                <li>
                    <ul>
                        {
                            movie.genres.map((genre, i) => <li key={i}>{genre}</li>)
                        }
                    </ul>
                </li>
            </ul>
        </article>
    </Link>

export default MovieListItem