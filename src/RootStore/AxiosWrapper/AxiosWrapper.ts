import { AxiosResponse } from 'axios';

interface AxiosWrapper {
  get<T>(
    url: string,
    options?: { headers?: Record<string, string>; params?: any },
  ): Promise<AxiosResponse<T>>;

  post<T>(
    url: string,
    data?: any,
    options?: { headers?: Record<string, string> },
  ): Promise<AxiosResponse<T>>;
}

export default AxiosWrapper;
