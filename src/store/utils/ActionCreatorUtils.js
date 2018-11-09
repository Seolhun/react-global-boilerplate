import {
  isObject,
} from 'lodash';

const setDataType = (data = {}) => {
  if (Array.isArray(data)) {
    return [...data];
  }
  if (isObject(data)) {
    return {
      ...data,
    };
  }
  return data;
};

// Will be changed as soon as, `asyncActionPayloadCreator`
const actionPayloadCreator = (type, {
  data = {},
  params = {},
  error = {},
}) => {
  const response = setDataType(data);
  const parameters = setDataType(params);
  return {
    hasError: type.endsWith('FAILURE'),
    isFetching: type.endsWith('REQUEST'),
    isDone: type.endsWith('SUCCESS') || type.endsWith('FAILURE'),
    error,
    params: parameters,
    response,
  };
};

// Will be changed as soon as, `asyncActionCreator`
const actionCreator = (type, {
  data = {},
  params = {},
  error = {},
}) => {
  const payload = actionPayloadCreator(type, {
    data,
    params,
    error,
  });
  return {
    type,
    payload,
  };
};

const actionResponseCreator = (type, response, params = {}, data) => {
  if (response.hasError) {
    return actionCreator(type.FAILURE, {
      data: response.result,
      params,
      error: {
        message: response.error,
      },
    });
  }
  return actionCreator(type.SUCCESS, {
    data: data || response.result.data,
    params,
  });
};

const setActionCreator = (type, {
  data = {},
  params = {},
}) => {
  const response = setDataType(data);
  return {
    type,
    payload: {
      response,
      params,
    },
  };
};

const setActionCreatorByName = (
  type, {
    name = '',
    data = {},
    params = {},
    error = {},
  },
) => {
  const response = setDataType(data);
  if (type.endsWith('RESET')) {
    return {
      type,
      payload: {
        [name]: {
          response,
          params,
          error,
        },
      },
    };
  }

  // SET or anything
  return {
    type,
    payload: {
      [name]: {
        response,
        params,
        error,
      },
    },
  };
};

export {
  setDataType,
  actionCreator,
  actionPayloadCreator,
  actionResponseCreator,
  setActionCreator,
  setActionCreatorByName,
};

export default {
  setDataType,
  actionCreator,
  actionPayloadCreator,
  actionResponseCreator,
  setActionCreator,
  setActionCreatorByName,
};
