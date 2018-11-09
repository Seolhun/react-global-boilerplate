import axios from 'axios';

const API = {
  DEV: 'http://localhost:5000/',
  PRODUCTION: 'http://localhost:5000/',
};

class AbstractController {
  static httpCreator(headers = {}, isDevServer = true) {
    const http = axios.create({
      baseURL: isDevServer ? API.DEV : API.PRODUCTION,
      timeout: 150000,
      headers: {
        ...headers,
      },
    });
    return http;
  }

  static http({
    method, url, data = {}, headers = {}, isDevServer = true,
  }) {
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

    return this.httpCreator(headers, isDevServer)({
      method,
      url,
      data,
    });
  }
}

export default AbstractController;
