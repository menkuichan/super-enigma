import React from 'react';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import { SimpleModal } from '../../Modal/Modal';

import './movie-list-item.css';

export class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      genres, title, overview, posterPath, voteAverage, releaseDate,
    } = this.props;
    return (
      <Paper className="paper">
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase>
              <img className="img" alt="poster" src={posterPath} />
            </ButtonBase>
            <SimpleModal genres={genres} title={title} overview={overview} posterPath={posterPath} voteAverage={voteAverage} releaseDate={releaseDate} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid className="overview" item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {title}
                  <Typography variant="body2" color="textSecondary">
                    {releaseDate}
                  </Typography>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {overview}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {`Genres: ${genres.join(', ')}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Chip className="chip" label={voteAverage} variant="outlined" />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

MovieListItem.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default MovieListItem;
