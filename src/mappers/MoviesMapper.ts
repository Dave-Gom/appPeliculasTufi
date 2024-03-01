import {Movie} from '../models/interfaces/movie';
import {NowPlayingResponse} from '../models/responses/NowPlaying.response';
import {PopularMoviesResponse} from '../models/responses/PopularMovies.response';
import {TopRatedResponse} from '../models/responses/TopRated.response';
import {UpcomingMoviesResponse} from '../models/responses/Upcoming.response';

export const mapNowPlayingResponseToMovie = (
  nowPlayingResponse: NowPlayingResponse,
) => {
  const movies: Movie[] = nowPlayingResponse.results.map(result => ({
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
  }));
  return movies;
};

export const mapPopularMoviesResponseToMovies = (
  popularMoviesResponse: PopularMoviesResponse,
) => {
  const movies: Movie[] = popularMoviesResponse.results.map(result => ({
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
  }));
  return movies;
};

export const mapTopRatedResponseToMovies = (
  topRatedResponse: TopRatedResponse,
) => {
  const movies: Movie[] = topRatedResponse.results.map(result => ({
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
  }));
  return movies;
};

export const mapUpcomingMoviesResponseToMovies = (
  upcomingMoviesResponse: UpcomingMoviesResponse,
) => {
  const movies: Movie[] = upcomingMoviesResponse.results.map(result => ({
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
  }));
  return movies;
};
