import { AUTHENTICATION } from '../type/ActionTypes';
import { actionCreator } from '../utils/ActionCreatorUtils';

import { CookieUtils } from '../../utils';
import { TOKENS } from '../../constant';

const { GET_LOGIN_INFO, POST_LOGIN } = AUTHENTICATION;


// Not Used and Test
export const getLoginInfoAction = () => {
  const TYPE = GET_LOGIN_INFO;
  const token = CookieUtils.getCookieByName(TOKENS.AUTH);
  return actionCreator(
    TYPE.REQUEST,
    {},
    {
      token,
    },
  );
};

export const postLoginByFacebookAction = ({
  accessToken,
  id,
  name,
  email,
}) => {
  const TYPE = POST_LOGIN;
  return actionCreator(
    TYPE.REQUEST,
    {},
    {
      accessToken,
      id,
      name,
      email,
    },
  );
};
