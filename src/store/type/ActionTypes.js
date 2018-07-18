// @flow
const ASYNC = 'ASYNC';
export const ORIGIN = 'ORIGIN';
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const CANCEL = 'CANCEL';

const TOGGLE = 'TOGGLE';
export const SET = 'SET';
export const RESET = 'RESET';

const keyMirror = (obj) => {
  const ret = {};
  // let key: string
  Object.keys(obj)
    .filter(key => Object.prototype.hasOwnProperty.call(obj, key))
    .forEach((key) => {
      if (obj[key] === ASYNC) {
        ret[key] = {
          [ORIGIN]: key,
          [REQUEST]: `${key}_${REQUEST}`,
          [SUCCESS]: `${key}_${SUCCESS}`,
          [FAILURE]: `${key}_${FAILURE}`,
          [CANCEL]: `${key}_${CANCEL}`,
        };
      } else if (obj[key] === TOGGLE) {
        ret[key] = {
          [REQUEST]: `${key}_${REQUEST}`,
          [SUCCESS]: `${key}_${SUCCESS}`,
          [RESET]: `${key}_${RESET}`,
          [FAILURE]: `${key}_${FAILURE}`,
        };
      } else {
        ret[key] = key;
      }
    });

  return ret;
};

/*
************************************************************************
****************************** Observable ******************************
************************************************************************
*/
/*
************************
*** Common
************************
*/
export const LOCAL_PAGINATION = keyMirror({
  SET_PAGINATION: TOGGLE,
});
/*
************************
*** Authentication
************************
*/
export const AUTHENTICATION = keyMirror({
  GET_LOGIN_INFO: ASYNC,
  POST_LOGIN: ASYNC,
});

/*
************************
*** Custom Stat List
************************
*/
export const CUSTOM_STAT_LIST = keyMirror({
  GET_CUSTOM_STAT_LIST: ASYNC,
  POST_CUSTOM_STAT_LIST: ASYNC,
  PATCH_CUSTOM_STAT_LIST: ASYNC,
  DELETE_CUSTOM_STAT_LIST: ASYNC,
});
