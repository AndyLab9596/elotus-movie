// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const NOW_PLAYING_BASE_URL: string = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`;
const TOP_RATED: string = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
// For single movie
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditsUrl = (id?: string) => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280,
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';

export {
  SEARCH_BASE_URL,
  NOW_PLAYING_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  movieUrl,
  creditsUrl,
  TOP_RATED
};
