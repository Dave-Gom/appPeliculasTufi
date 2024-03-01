import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {AppConfig} from '../config/appConfig';
import {
  interceptorResponse,
  interceptorResponseF,
} from './InterceptorFunctions';

type PostType = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>,
) => Promise<R>;

type getType = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>,
) => Promise<R>;

type delType = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>,
) => Promise<R>;

export const API = async (contentType?: string) => {
  const createAxiosObject = async () => {
    let axiosOBj = axios.create({
      baseURL: `${AppConfig.urlBase}`,
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'Content-Type': contentType ?? 'application/json',
      },
    });
    axiosOBj.defaults.withCredentials = true;
    axiosOBj.interceptors.response.use(
      interceptorResponseF,
      interceptorResponse,
    );
    return axiosOBj;
  };

  const AXIOS = await createAxiosObject();

  const get: getType = (
    url: string,
    config = {
      headers: {
        Authorization: `Bearer + ${AppConfig.token}`,
      },
    },
  ) => {
    return AXIOS.get(url, config);
  };

  const post: PostType = (
    url: string,
    body: any,
    config = {
      headers: {
        Authorization: `Bearer + ${AppConfig.token}`,
      },
      withCredentials: true,
    },
  ) => {
    return AXIOS.post(url, body, config);
  };

  const put: PostType = (
    url: string,
    body: any,
    config = {
      headers: {
        Authorization: `Bearer + ${AppConfig.token}`,
      },
      withCredentials: true,
    },
  ) => {
    return AXIOS.put(url, body, config);
  };

  const del: delType = (
    url: string,
    body: any,
    config = {
      headers: {
        Authorization: `Bearer + ${AppConfig.token}`,
      },
      withCredentials: true,
    },
  ) => {
    return AXIOS.delete(url, config);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
