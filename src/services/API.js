import axios from 'axios';

const API_KEY = '13641ccffa355b1e9949e2dfbacbd862';
const BaseUrl = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: BaseUrl,
});

const requestHelper = request => {
  return request
    .then(resp => resp)
    .then(({ data }) => data)
    .catch(err => console.log(err));
};

export const getTrendingMovies = () =>
  requestHelper(
    instance.get(`trending/all/day?api_key=${API_KEY}&language=en-US`),
  );

export const getMovieById = id =>
  requestHelper(instance.get(`movie/${id}?api_key=${API_KEY}&language=en-US`));

export const getByQuery = query =>
  requestHelper(
    instance.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`,
    ),
  );

export const getCast = id =>
  requestHelper(instance.get(`movie/${id}/credits?api_key=${API_KEY}`));

export const getReviews = id =>
  requestHelper(
    instance.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    ),
  );
