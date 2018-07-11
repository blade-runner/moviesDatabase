import React from 'react'
import { connect } from 'react-redux'

import MovieListItem from './MovieListItem'

const MoviesList = ({ movies }) => {

    return (

        <section className="main__movies">
            {
                movies.map((movie, id) =>
                    <MovieListItem key={id} movie={movie} />)
            }
        </section>

    )
}
const mapStateToProps = (state) => ({
    movies: state.movies
})

export default connect(mapStateToProps)(MoviesList);

