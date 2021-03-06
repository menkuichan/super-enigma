import React from 'react';
import PropTypes from 'prop-types';

import Circular from '../Circular';
import MovieListItem from './MovieListItem';

import { MoviesWrapper, Title } from './style';

const MovieList = ({ movies, title, isLoading }) => (
  <MoviesWrapper>
    <Title>
      {(!isLoading && movies.length === 0) ? 'No results' : title}
    </Title>
    {isLoading ? <Circular />
      : movies.map(movie => (
        <MovieListItem
          title={movie.title}
          genres={movie.genres}
          voteAverage={movie.voteAverage}
          overview={movie.overview}
          posterPath={movie.posterPath}
          releaseDate={movie.releaseDate}
          popularity={movie.popularity}
          originalLanguage={movie.originalLanguage}
          voteCount={movie.voteCount}
          originalTitle={movie.originalTitle}
        />
      ))}
  </MoviesWrapper>
);

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default MovieList;
