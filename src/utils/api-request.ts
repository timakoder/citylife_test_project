import axios, { AxiosResponse } from 'axios';
import { apiConfig } from '../config';

const axiosInstance = axios.create({
  baseURL: apiConfig.baseUrl
});

export type ApiRequest = {
  method: 'get' | 'put' | 'post' | 'delete',
  endpoint: string,
  body?: Object,
  params?: Object,
  headers?: Object
};

const apiRequest = async <T>(options: ApiRequest): Promise<T> => {
  const response = await axiosInstance({
    method: options.method,
    data: options.body,
    url: options.endpoint,
    params: options.params,
    headers: options.headers
  });

  return response.data;
};

export default apiRequest;