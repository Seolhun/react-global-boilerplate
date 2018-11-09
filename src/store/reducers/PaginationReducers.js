import { LOCAL_PAGINATION } from '../type/ActionTypes';

const PAGINATION = LOCAL_PAGINATION.SET_PAGINATION;

const INIT_STATE = {
  appList: {
    page: 1,
    count: 15,
    sortBy: '',
    orderBy: 'DESC',
    totalPage: 0,
  },
  customStatList: {
    page: 0,
    count: 20,
    sortBy: '',
    orderBy: 'DESC',
    totalPage: 1,
  },
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case PAGINATION.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
