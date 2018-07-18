import { AUTHENTICATION, REQUEST } from '../type/ActionTypes';
import { actionPayloadCreator } from '../utils/ActionCreatorUtils';

const { GET_LOGIN_INFO, POST_LOGIN } = AUTHENTICATION;

// {
//   hasError: false,
//   isFetching: true,
//   isDone: false,
//   params: {},
//   response: {},
// },
const INIT_STATE = actionPayloadCreator(REQUEST, {});

// APP_LIST
export const AuthenticationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GET_LOGIN_INFO
    case GET_LOGIN_INFO.SUCCESS:
      return {
        ...action.payload,
      };
    case GET_LOGIN_INFO.FAILURE:
      return {
        ...state,
      };
    case GET_LOGIN_INFO.CANCEL:
      return {
        ...state,
      };
    // POST_LOGIN
    case POST_LOGIN.SUCCESS:
      return {
        ...action.payload,
      };
    case POST_LOGIN.FAILURE:
      return {
        ...state,
      };
    case POST_LOGIN.CANCEL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AuthenticationReducer;
