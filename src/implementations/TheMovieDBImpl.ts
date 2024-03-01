import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from '../datasources/TheMovieDB.api';
import {
  mapNowPlayingResponseToMovie,
  mapPopularMoviesResponseToMovies,
  mapTopRatedResponseToMovies,
  mapUpcomingMoviesResponseToMovies,
} from '../mappers/MoviesMapper';

export const loadNowPlaying = async () => {
  try {
    const response = await getNowPlaying();
    if (response) {
      const movies = mapNowPlayingResponseToMovie(response);
      return movies;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const loadPopular = async () => {
  try {
    const response = await getPopular();
    if (response) {
      const movies = mapPopularMoviesResponseToMovies(response);
      return movies;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const loadTopRated = async () => {
  try {
    const response = await getTopRated();
    if (response) {
      const movies = mapTopRatedResponseToMovies(response);
      return movies;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const loadUpcoming = async () => {
  try {
    const response = await getUpcoming();
    if (response) {
      const movies = mapUpcomingMoviesResponseToMovies(response);
      return movies;
    }

    return [];
  } catch (error) {
    return [];
  }
};
