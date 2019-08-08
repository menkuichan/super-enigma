export const MOVIES = {
  SEARCH_MOVIES_RESET: 'SEARCH_MOVIES_RESET',
  LOAD_MOVIES_SUCCESS: 'LOAD_MOVIES_SUCCESS',
  INIT_SEARCH_PROPS: 'INIT_SEARCH_PROPS',
  LOAD_MOVIES_REQUEST: 'LOAD_MOVIES_REQUEST',
  LOAD_MOVIES_FAILURE: 'LOAD_MOVIES_FAILURE',
  SET_PAGE: 'SET_PAGE',
};

export const ROUTES = {
  POPULAR: '/',
  UPCOMING: '/upcoming',
  NOW_PLAYING: '/nowplaying',
};

export const HEADER_TABS = [{
  TITLE: 'popular',
  PATH: ROUTES.POPULAR,
},
{
  TITLE: 'upcoming',
  PATH: ROUTES.UPCOMING,
},
{
  TITLE: 'now playing',
  PATH: ROUTES.NOW_PLAYING,
},
];

export const MOVIE_TYPE = {
  POPULAR: 'popular',
  UPCOMING: 'upcoming',
  NOW_PLAYING: 'now_playing',
};

export const BASE_URL = 'https://api.themoviedb.org/3/';

export const PARAMS = {
  URL: `${BASE_URL}movie/`,
  SEARCH_URL: `${BASE_URL}search/movie`,
  GENRES_URL: `${BASE_URL}genre/movie/list`,
  API_KEY: 'ab7c9fc53125a8e8d9fd23c8704f80e5',
};

export const STATIC_URL = 'https://image.tmdb.org/t/p/w200/';

export const PAGE_COUNT = 20;

export const ENTER_KEY = 13;
