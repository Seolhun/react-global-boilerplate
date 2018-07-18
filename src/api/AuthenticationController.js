import AbstractController from './AbstractController';

import { CookieUtils } from '../utils';
import { TOKENS } from '../constant';

class AuthenticationController extends AbstractController {
  static async getLoginInfo(token) {
    try {
      const response = await this.http({
        method: 'post',
        url: 'api/v2/login',
        data: {
          token,
        },
      });
      if (response.status === 200) {
        return response.data;
      }
      return new Error('Not found data');
    } catch (error) {
      return new Error(error.message);
    }
  }

  static async postLogin({ fbAccessToken }) {
    try {
      const response = await this.http({
        method: 'post',
        url: 'v1/auth/facebook',
        data: {
          fbAccessToken,
        },
      });
      if (response.status === 200) {
        CookieUtils.setCookieByName(TOKENS.AUTH, response.data);
        return response.data;
      }
      return new Error('Not found data');
    } catch (error) {
      return new Error(error.message);
    }
  }
}

export default AuthenticationController;
