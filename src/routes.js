import { lazy } from 'react';

export const pagesRoutes = [
  {
    path: '/',
    label: 'HomePage',
    exact: true,
    component: lazy(() =>
      import(
        './components/HomePage/HomePage' /* webpackChunkName: "HomePage" */
      ),
    ),
  },

  {
    path: '/movies',
    label: 'movies',
    exact: true,
    component: lazy(
      () =>
        import(
          './components/MoviesPage/MoviesPage'
        ) /* webpackChunkName: "MoviesPage */,
    ),
  },
  {
    path: '/movies/:movieId',
    label: 'movieDetails',
    component: lazy(() =>
      import(
        './components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
      ),
    ),
  },
  {
    path: '/error',
    label: 'error',
    component: lazy(() =>
      import('./components/Error/Error' /* webpackChunkName: "Error" */),
    ),
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  home: '/',
  movies: '/movies',
  movieDetails: '/movies/:movieId',
  cast: '/movies/:movieId/cast',
  reviews: '/movies/:movieId/reviews',
  error: '/error',
};
