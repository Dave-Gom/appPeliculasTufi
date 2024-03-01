import {AppConfig} from '../config/appConfig';
import {API} from '../helpers/API';
import {NowPlayingResponse} from '../models/responses/NowPlaying.response';
import {PopularMoviesResponse} from '../models/responses/PopularMovies.response';
import {TopRatedResponse} from '../models/responses/TopRated.response';
import {UpcomingMoviesResponse} from '../models/responses/Upcoming.response';

export enum sourcesEnum {
  NOWPLAYING = '/movie/upcoming',
  POPULAR = '/movie/popular',
  TOPRATED = '/movie/top_rated',
  UPCOMING = '/movie/upcoming',
}

export const getNowPlaying = async (language = 'en') => {
  try {
    const api = await API();

    const nowPlaying = await api.get<NowPlayingResponse>(
      `${sourcesEnum.NOWPLAYING}?api_key=${AppConfig.token}&language=${language}`,
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
      `${sourcesEnum.POPULAR}?api_key=${AppConfig.token}&language=${language}`,
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
      `${sourcesEnum.TOPRATED}?api_key=${AppConfig.token}&language=${language}`,
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
      `${sourcesEnum.TOPRATED}?api_key=${AppConfig.token}&language=${language}`,
    );

    if (nowPlaying.status === 200) {
      return nowPlaying.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};
