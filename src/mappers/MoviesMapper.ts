import {Movie} from '../models/interfaces/movie';
import {Result} from '../models/responses/NowPlaying.response';

export const NowPlayingToMovie = (result: Result) => {
  const movie: Movie = {
    adult: result.adult,
    backdropPath: result.backdrop_path,
    genreIds: result.genre_ids,
    id: result.id,
    originalLanguage: result.original_language,
    originalTitle: result.original_title,
    overview: result.overview,
    popularity: result.popularity,
    posterPath: result.poster_path,
    releaseDate: result.release_date,
    title: result.title,
    video: result.video,
    voteAverage: result.vote_average,
    voteCount: result.vote_count,
  };
  return movie;
};
