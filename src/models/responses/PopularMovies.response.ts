import {Result} from './NowPlaying.response';

export interface PopularMoviesResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
