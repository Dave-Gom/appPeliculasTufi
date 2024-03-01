import {getNowPlaying} from '../datasources/TheMovieDB.api';
import {NowPlayingToMovie} from '../mappers/MoviesMapper';

export const loadNowPlaying = async () => {
  try {
    const response = await getNowPlaying();
    if (response) {
      const playingMovies = response.results.map(result =>
        NowPlayingToMovie(result),
      );
      return playingMovies;
    }

    return [];
  } catch (error) {
    return [];
  }
};
