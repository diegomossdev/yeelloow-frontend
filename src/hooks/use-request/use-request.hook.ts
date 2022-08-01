import { useState } from 'react';
import Cookies from 'universal-cookie';

import { RequestError } from './request-errors';
import { isUserSigned } from 'helpers/access-cookie.helper';
import { general } from './http';

export const useRequest = (path: string) => {
  const [errors, setErrors] = useState([]);

  const buildUrl = (url: string) => {
    return url ? `${path}/${url}` : path;
  };

  const buildHeaders = async () => {
    const cookies = new Cookies();
    const userSigned = await isUserSigned();

    const headers = {
      'x-access-token': `${userSigned.token}`,
      'Accept-Language': 'pt-BR,pt;q=0.9',
    };

    return headers;
  };

  const handleErrors = (e: any) => {
    console.log('handleErrors', e);
    if (e.response) {
      // if (e.response.status === 409) throw new RequestError409(e.response.data);
      // if (e.response.status === 406) throw new RequestError406(e.response.data);
      throw new RequestError(e.response.data);
    } else {
      // TODO: tratar erro generico
      throw new Error('generico');
    }
  };

  const callApi = async ({ url, data = null, ...config }: any) => {
    const requestConfig = config;
    requestConfig.url = buildUrl(url);
    requestConfig.headers = await buildHeaders();
    requestConfig.data = data;

    try {
      const api = general;
      return await api.request(requestConfig);
    } catch (e) {
      handleErrors(e);
      console.log('ERRO, tratar', e);
    }
  };

  return {
    errors,
    setErrors,
    get: async (url: string, config = {}): Promise<any> =>
      callApi({ method: 'GET', url, ...config }),
    del: async (url: string, config = {}): Promise<any> =>
      callApi({ method: 'DELETE', url, ...config }),
    put: async (url: string, data: any, config = {}): Promise<any> =>
      callApi({ method: 'PUT', url, data, ...config }),
    post: async (url: string, data: any, config = {}): Promise<any> =>
      callApi({ method: 'POST', url, data, ...config }),
  };
};
