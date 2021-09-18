const key = '13641ccffa355b1e9949e2dfbacbd862';
const BaseUrl = 'https://api.themoviedb.org/3/';

// https://developers.themoviedb.org/3/trending/get-trending -
//  список самых популярных фильмов
//  на сегодня для создания коллекции на главной странице.

function movieTrending(page = 1) {
  const url = `${BaseUrl}trending/movie/day?api_key=${key}&page=${page}&language=en-US`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json;
    }
  });
}

// https://developers.themoviedb.org/3/search/search-movies -
// поиск
//  кинофильма по ключевому слову на странице фильмов.

function getMovieBySearch(query, page) {
  const url = `${BaseUrl}search/movie?api_key=${key}&query=${query}&page=${page}&language=en-US`;
  if (!query) {
    return;
  }
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json;
    }
  });
}
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.

// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.

// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

const getAPI = {
  movieTrending,
  getMovieBySearch,
};

export default getAPI;
