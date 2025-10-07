import axios, { AxiosHeaders } from 'axios';
import type { AxiosInstance } from 'axios';
import AxiosWrapper from './AxiosWrapper';
import { SecureStorage } from '../SecureStorage';

class AxiosWrapperImpl implements AxiosWrapper {
  private readonly _api: AxiosInstance;
  private readonly defaultHeaders = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
  };

  constructor(
    protected readonly _root: {
      readonly secureStorage: SecureStorage;
    },
  ) {
    this._api = axios.create({
      baseURL: process.env.REACT_APP_PUBLIC_API_URL,
      headers: this.defaultHeaders,
    });

    this._api.interceptors.request.use(
      (config) => {
        const tokens = this._root.secureStorage.readTokens();
        if (tokens) {
          config.headers = new AxiosHeaders(config.headers).set(
            'Authorization',
            `Bearer ${tokens.accessToken}`,
          );
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    this._api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const tokens = this._root.secureStorage.readTokens();
          if (tokens?.refreshToken) {
            try {
              const { data } = await axios.post(
                `${process.env.REACT_APP_PUBLIC_API_URL}/auth/refresh`,
                { refreshToken: tokens.refreshToken },
                { headers: { 'Content-Type': 'application/json' } },
              );

              this._root.secureStorage.saveTokens(data);
              originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

              return this._api(originalRequest);
            } catch {
              this._root.secureStorage.clearTokens();
            }
          }
        }

        return Promise.reject(error);
      },
    );
  }

  async get<T>(
    url: string,
    options?: { headers?: Record<string, string>; params?: any },
  ) {
    return this._api.get<T>(url, {
      headers: { ...this.defaultHeaders, ...options?.headers },
      params: options?.params,
    });
  }

  async post<T>(
    url: string,
    data?: any,
    options?: { headers?: Record<string, string> },
  ) {
    return this._api.post<T>(url, data, {
      headers: { ...this.defaultHeaders, ...options?.headers },
    });
  }
}

export default AxiosWrapperImpl;
