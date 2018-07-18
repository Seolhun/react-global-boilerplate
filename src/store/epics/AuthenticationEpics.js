import { isEmpty } from 'lodash';

import { AUTHENTICATION } from '../type/ActionTypes';
import { actionCreator } from '../utils/ActionCreatorUtils';

import { AuthenticationController } from '../../api';

const { GET_LOGIN_INFO, POST_LOGIN } = AUTHENTICATION;


export const getLoginInfoEpic = (action$) => {
  const TYPE = GET_LOGIN_INFO;
  return action$
    .ofType(TYPE.REQUEST)
    .switchMap(async ({ payload }) => {
      const { params } = payload;
      if (!params) {
        throw new Error('Not found token: may be you\'re not authenticated user.');
      }
      const data = await AuthenticationController.getLoginInfo(params.token);
      return {
        response: data,
        params,
      };
    })
    .map(({ response, params }) => actionCreator(TYPE.SUCCESS, response, params))
    .defaultIfEmpty({ type: TYPE.CANCEL })
    .takeUntil(action$.ofType(TYPE.CANCEL))
    .catch(error => [actionCreator(TYPE.FAILURE, error.message)]);
};

export const postLogin = (action$, store$) => {
  const TYPE = POST_LOGIN;
  return action$
    .ofType(TYPE.REQUEST)
    .switchMap(async ({ payload }) => {
      const { params } = payload;
      const prevState = await store$.getState().authentication;
      const {
        accessToken,
        email,
      } = params;
      if (email === prevState.params.email && isEmpty(prevState.params)) {
        return {
          ...prevState,
        };
      }
      const data = await AuthenticationController.postLogin({ fbAccessToken: accessToken });
      return {
        response: data,
        params,
      };
    })
    .map(({ response, params }) => actionCreator(TYPE.SUCCESS, response, params))
    .defaultIfEmpty({ type: TYPE.CANCEL })
    .takeUntil(action$.ofType(TYPE.CANCEL))
    .catch(error => [actionCreator(TYPE.FAILURE, error.message)]);
};
