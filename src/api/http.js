import axios from 'axios';

import { getCookieByName } from '../utils';
import { TOKENS } from '../constant';

export const END_POINT = {
  PRODUCTION: 'PRODUCTION',
  DEV: 'DEV',
  STAGE: 'STAGE',
};

export const BASE_URL = {
  PROD: '',
  DEV: '',
  STAGE: '',
};

const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  OPTIONS: 'OPTIONS',
  CONNECT: 'connect',
};

// path where tokens are not needed.
const TOKEN_WHITELIST = ['front/users/login', 'front/users/regist'];

const REGEX = {
  WHITELIST: /^front\/users\/registcheck\/.+$/,
};

const tokenizeHeaders = (url, headers) => {
  let tokenizedHeader = { ...headers };
  if (!REGEX.WHITELIST.test(url) && !TOKEN_WHITELIST.includes(url)) {
    tokenizedHeader = {
      ...tokenizedHeader,
      Authorization: `JWT ${getCookieByName(TOKENS.AUTH) || ''}`,
      'Accept-Language': getCookieByName(TOKENS.LOCALE),
    };
  }
  return tokenizedHeader;
};

const httpCreator = (headers = {}, endpoint = END_POINT.PRODUCTION) => {
  const http = axios.create({
    baseURL: BASE_URL[endpoint],
    timeout: 31000,
    headers: {
      ...headers,
    },
  });
  return http;
};

const http = ({
  method = HTTP_METHODS.GET,
  url,
  data = {},
  headers = {},
  endpoint = false,
}) => {
  if (!method) {
    throw Error(`method argument is requirement : because of ${method}`);
  }
  if (!url) {
    throw Error(`url argument is requirement : because of ${url}`);
  }
  if (method === 'post' || method === 'patch') {
    if (!data) {
      throw Error(`data argument is requirement : because of ${data}`);
    }
  }

  return httpCreator({ ...tokenizeHeaders(url, headers) }, endpoint)({
    method,
    url,
    data,
  });
};

export default http;
