import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Header from './Header'
import MovieCard from './MovieCard'
import MovieNew from './MovieNew'
import MovieEdit from './MovieEdit'
import MoviesList from './MoviesList'
import { loadMovies } from '../actions'


class Main extends React.Component {
    constructor(props) {
        super(props);
        props.loadMovies();
    }

    render = () => {

        if (!this.props.movies) {
            return <div>loading movies...</div>
        }

        return <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route path='/movies/new' component={MovieNew} />
                    <Route path='/movies/:id/edit' component={MovieEdit} />
                    <Route path='/movies/:id' component={MovieCard} />
                    <Route path='/movies' component={MoviesList} />
                    <Redirect from="*" to='/movies' />
                </Switch>


            </div>
        </Router>
    }
}
const mapStateToProps = (state) => ({
    movies: state.movies
})

const mapActionsToProps = (dispatch) => ({
    loadMovies: () => dispatch(loadMovies())
})

export default connect(mapStateToProps, mapActionsToProps)(Main);
