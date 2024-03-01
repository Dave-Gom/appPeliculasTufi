import {AxiosError, AxiosResponse} from 'axios';

export const interceptorResponse = (error: AxiosError<any>) => {
  console.log(error);
};

export const interceptorResponseF = (response: AxiosResponse<any>) => {
  return response;
};
