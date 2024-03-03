import {API} from '../helpers/API';
import {MovieDetailsResponse} from '../models/responses/MovieDetails.response';
import {NowPlayingResponse} from '../models/responses/NowPlaying.response';
import {PopularMoviesResponse} from '../models/responses/PopularMovies.response';
import {SearchResponse} from '../models/responses/Search.response';
import {TopRatedResponse} from '../models/responses/TopRated.response';
import {UpcomingMoviesResponse} from '../models/responses/Upcoming.response';

export enum sourcesEnum {
  NOWPLAYING = '/movie/now_playing',
  POPULAR = '/movie/popular',
  TOPRATED = '/movie/top_rated',
  UPCOMING = '/movie/upcoming',
  SEARCHBYTITLE = '/search/movie',
  DETAILS = '/movie/',
}

export const getNowPlaying = async (language = 'en') => {
  try {
    const api = await API();

    const nowPlaying = await api.get<NowPlayingResponse>(
      `${sourcesEnum.NOWPLAYING}?language=${language}`,
    );

    if (nowPlaying.status === 200) {
      return nowPlaying.data;
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const getPopular = async (language = 'en') => {
  try {
    const api = await API();

    const nowPlaying = await api.get<PopularMoviesResponse>(
      `${sourcesEnum.POPULAR}?language=${language}`,
    );

    if (nowPlaying.status === 200) {
      return nowPlaying.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getTopRated = async (language = 'en') => {
  try {
    const api = await API();

    const nowPlaying = await api.get<TopRatedResponse>(
      `${sourcesEnum.TOPRATED}?language=${language}`,
    );

    if (nowPlaying.status === 200) {
      return nowPlaying.data;
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const getUpcoming = async (language = 'en') => {
  try {
    const api = await API();

    const nowPlaying = await api.get<UpcomingMoviesResponse>(
      `${sourcesEnum.UPCOMING}?language=${language}`,
    );

    if (nowPlaying.status === 200) {
      return nowPlaying.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const searchByTitle = async (title: string, language = 'en') => {
  try {
    const api = await API();

    const nowPlaying = await api.get<SearchResponse>(
      `${sourcesEnum.SEARCHBYTITLE}?query=${title}&include_adult=false&language=${language}`,
    );

    if (nowPlaying.status === 200) {
      return nowPlaying.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getMovieDetails = async (id: number, language = 'en') => {
  try {
    const api = await API();

    const nowPlaying = await api.get<MovieDetailsResponse>(
      `${sourcesEnum.DETAILS}/${id}?language=${language}`,
    );

    if (nowPlaying.status === 200) {
      return nowPlaying.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};
