import { MOVIES } from '../constants';

export const request = () => ({
  type: MOVIES.LOAD_MOVIES_REQUEST,
});

export const success = payload => ({
  type: MOVIES.LOAD_MOVIES_SUCCESS,
  payload,
});

export const failure = () => ({
  type: MOVIES.LOAD_MOVIES_FAILURE,
});

export const reset = () => ({
  type: MOVIES.SEARCH_MOVIES_RESET,
});

export const setPage = payload => ({
  type: MOVIES.SET_PAGE,
  payload,
});

export const search = payload => ({
  type: MOVIES.INIT_SEARCH_PROPS,
  payload,
});

export const cacheGenres = payload => ({
  type: MOVIES.CACHE_GENRES,
  payload,
});

export const load = payload => ({
  type: MOVIES.LOAD_MOVIES,
  payload,
});
