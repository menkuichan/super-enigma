import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

import { PAGE_COUNT } from '../../app.constants';

import './flat-pagination.css';

const theme = createMuiTheme();

export class FlatPagination extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, offset) {
    const { onClickPage } = this.props;
    onClickPage(e, offset);
  }

  render() {
    const { totalResults, page } = this.props;
    const offset = PAGE_COUNT * page - 1;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Paper className="pagination-wrap" square>
          <Pagination
        // The number of rows per page. Allow a number greater than or equal to 1.
            limit={PAGE_COUNT}
        // The number of rows to skip. Allow a number greater than or equal to 0.
            offset={offset}
        // The total number of rows. Allow a number greater than or equal to 0.
            total={totalResults}
            onClick={this.handleClick}
          />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

FlatPagination.propTypes = {
  onClickPage: PropTypes.func.isRequired,
  totalResults: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default FlatPagination;