import { LOCAL_PAGINATION } from '../type/ActionTypes';
import { freepassActionCreator } from '../utils/ActionCreatorUtils';

/*
  SET_PAGINATION: TOGGLE,
  SET_PAGE_IN_PAGINATION: TOGGLE,
  SET_COUNT_IN_PAGINATION: TOGGLE,
  SET_SORT_BY_IN_PAGINATION: TOGGLE,
  SET_ORDER_BY_IN_PAGINATION: TOGGLE,
*/
export const setPagination = (payloadName, {
  page, count, orderBy, sortBy, totalPage,
}) => {
  const TYPE = LOCAL_PAGINATION.SET_PAGINATION;
  return freepassActionCreator(
    TYPE.REQUEST,
    {
      page,
      count,
      orderBy,
      sortBy,
      totalPage,
    },
    payloadName,
  );
};

export default {
  setPagination,
};
