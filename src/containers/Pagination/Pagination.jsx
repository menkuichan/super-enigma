import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setPage as setPageAction,
} from '../../actions/movies';
import {
  PAGINATION_FIRST_PAGES as firstPagesValue,
  PAGINATION_LAST_PAGES as lastPagesValue,
  PAGINATION_MIN_TOTAL_PAGES as minTotalResults,
  MAX_PAGINATION_PAGES as maxPagesValue,
} from '../../constants';

import { PageNumber, PaginationWrapper } from './style';

@connect(
  ({ page, totalPages }) => ({ page, totalPages }),
  {
    setPage: setPageAction,
  },
)
export default class Pagination extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstPages: [],
      lastPages: [],
      actualPages: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { totalPages: prevtotalPages, page: prevPage } = prevProps;
    const { totalPages, page } = this.props;
    if (prevtotalPages !== totalPages || prevPage !== page) {
      this.checkPaginationPages();
    }
  }

  setPaginationPages(firstPageValue = 3, lastPageValue = 3) {
    const { page, totalPages } = this.props;
    const { firstPages, lastPages } = this.state;
    // first pages
    if (totalPages === 0) {
      this.setState({ firstPages: [0] });
    } else if (totalPages < 10) {
      this.setState({ firstPages: [...Array(totalPages)].map((v, i) => i + 1) });
    } else {
      this.setState({ firstPages: [...Array(firstPageValue)].map((v, i) => i + 1) });
    }
    // last pages
    if (totalPages >= minTotalResults) {
      this.setState({
        lastPages:
          [...Array(lastPageValue)].map((v, i) => i + (totalPages - lastPageValue) + 1),
      });
    } else {
      this.setState({ lastPages: [] });
    }
    // actual pages
    if (page === lastPages[0]
      || page === lastPages[0] - 1
      || page === lastPages[0] - 2) {
      this.setState({
        actualPages:
          [lastPages[0] - 3, lastPages[0] - 2, lastPages[0] - 1],
      });
      // when the current page (and two next) go to the last three
    } else
    if ((page > firstPagesValue
      && totalPages >= minTotalResults
      && page < totalPages - firstPagesValue
      && page !== firstPages.length + 1)
      || page === lastPages[0] - 3) { // display actual pages
      this.setState({
        actualPages:
          [page - 1, page, page + 1],
      });
    } else if (page > firstPagesValue
      && totalPages >= minTotalResults
      && page < totalPages - minTotalResults
      && page === firstPages.length + 1) {
      // display the current page if it goes immediately after the first three
      this.setState({
        actualPages:
          [page, page + 1, page + 2],
      });
    } else if (page === firstPages[firstPages.length - 1]
      && totalPages >= minTotalResults) {
      this.setState({
        actualPages:
          [page + 1, page + 2, page + 3],
      });
    } else {
      this.setState({ actualPages: [] });
    }
  }

  checkPaginationPages() {
    if (firstPagesValue <= maxPagesValue
      && lastPagesValue <= maxPagesValue) {
      this.setPaginationPages(firstPagesValue, lastPagesValue);
    } else {
      this.setPaginationPages();
    }
  }

  changePage(page) {
    const { setPage } = this.props;
    setPage({ page });
  }

  render() {
    const { totalPages, page } = this.props;
    const {
      firstPages, actualPages, lastPages,
    } = this.state;

    const handleClick = pageNumber => {
      if ((pageNumber < 1 && pageNumber !== 0)
        || pageNumber === 0) {
        this.changePage(1);
      } else if (pageNumber <= totalPages && pageNumber !== 0) {
        this.changePage(pageNumber);
      }
    };

    return (
      <PaginationWrapper>
        <PageNumber onClick={() => handleClick(1)}>{'<<'}</PageNumber>
        <PageNumber onClick={() => handleClick(page - 1)}>{'<'}</PageNumber>
        {firstPages
          .map(pageNumber => (
            <PageNumber
              onClick={() => handleClick(pageNumber)}
              className={`p${pageNumber}`}
              page={page}
            >
              {pageNumber}
            </PageNumber>
          ))}
        {actualPages.length ? <PageNumber>...</PageNumber> : ''}
        {actualPages
          .map(pageNumber => (
            <PageNumber
              onClick={() => handleClick(pageNumber)}
              className={`p${pageNumber}`}
              page={page}
            >
              {pageNumber}
            </PageNumber>
          ))}
        {lastPages.length ? <PageNumber>...</PageNumber> : ''}
        {lastPages
          .map(pageNumber => (
            <PageNumber
              onClick={() => handleClick(pageNumber)}
              className={`p${pageNumber}`}
              page={page}
            >
              {pageNumber}
            </PageNumber>
          ))}
        <PageNumber onClick={() => handleClick(page + 1)}>{'>'}</PageNumber>
        <PageNumber onClick={() => handleClick(totalPages)}>{'>>'}</PageNumber>
      </PaginationWrapper>
    );
  }
}

Pagination.defaultProps = {
  page: 1,
  totalPages: 0,
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  setPage: PropTypes.func.isRequired,
};
