import { isObject } from 'lodash';

const setDataType = (data = {}) => {
  if (Array.isArray(data)) {
    return [
      ...data,
    ];
  } if (isObject(data)) {
    return {
      ...data,
    };
  }
  return data;
};

const actionPayloadCreator = (type, data = {}, parameters = {}) => {
  const response = setDataType(data);
  const params = setDataType(parameters);
  if (type.endsWith('REQUEST')) {
    return {
      hasError: false,
      isFetching: true,
      isDone: false,
      params,
      response,
    };
  } if (type.endsWith('SUCCESS')) {
    return {
      hasError: false,
      isFetching: false,
      isDone: true,
      params,
      response,
    };
  } if (type.endsWith('FAILURE')) {
    return {
      hasError: true,
      isFetching: false,
      isDone: false,
      params,
      response,
    };
  } if (type.endsWith('CANCEL')) {
    return {
      hasError: false,
      isFetching: false,
      isDone: false,
      params,
      response,
    };
  }

  return {
    hasError: false,
    isFetching: false,
    isDone: false,
    params: {},
    response: { message: 'Not found valid action type' },
  };
};

const actionCreator = (type, data = {}, parameters = {}) => {
  const payload = actionPayloadCreator(type, data, parameters);
  return {
    type,
    payload,
  };
};

const freepassActionCreator = (type, data = {}, name = '') => {
  const response = setDataType(data);
  if (type.endsWith('RESET')) {
    return {
      type,
      payload: {
        [name]: {},
      },
    };
  }

  // SET
  return {
    type,
    payload: {
      [name]: response,
    },
  };
};

export {
  setDataType,
  actionCreator,
  actionPayloadCreator,
  freepassActionCreator,
};

export default {
  setDataType,
  actionCreator,
  actionPayloadCreator,
  freepassActionCreator,
};
