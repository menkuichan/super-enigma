import React from 'react'

import { MOVIE_TYPE as type } from '../../app.constants.js'
import MovieList from '../../components/MovieList/MovieList'

import { getMovies } from '../../api/api'

import '../pages.css'

export default class UpcomingPage extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        getMovies(type.UPCOMING)
            .then(movies => {
                this.setState({ movies })
            })
    }

    render() {
        return (
            <MovieList movies={this.state.movies} page_title='Upcoming movies:'/>
        )
    }
}
