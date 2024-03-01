import axios, {AxiosResponse} from 'axios';
import {AppConfig} from '../config/appConfig';
import {
  interceptorResponse,
  interceptorResponseF,
} from './InterceptorFunctions';

type PostType = <T = any, R = AxiosResponse<T>>(
  url: string,
  body: any,
) => Promise<R>;

type getType = <T = any, R = AxiosResponse<T>>(
  url: string,
  auth?: boolean,
) => Promise<R>;

type delType = <T = any, R = AxiosResponse<T>>(url: string) => Promise<R>;

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

  const get: getType = (url: string, auth: boolean = false) => {
    return AXIOS.get(
      url,
      auth
        ? {
            headers: {
              Authorization: `Bearer + ${AppConfig.token}`,
            },
          }
        : undefined,
    );
  };

  const post: PostType = (url: string, body: any) => {
    return AXIOS.post(url, body, {
      headers: {
        Authorization: `Bearer + ${AppConfig.token}`,
      },
      withCredentials: true,
    });
  };

  const put: PostType = (url: string, body: any) => {
    return AXIOS.put(url, body, {
      headers: {
        Authorization: `Bearer + ${AppConfig.token}`,
      },
      withCredentials: true,
    });
  };

  const del: delType = (url: string) => {
    return AXIOS.delete(url, {
      headers: {
        Authorization: `Bearer + ${AppConfig.token}`,
      },
      withCredentials: true,
    });
  };

  return {
    get,
    post,
    put,
    del,
  };
};
