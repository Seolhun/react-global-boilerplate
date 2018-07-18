import { LOCAL_PAGINATION } from '../type/ActionTypes';
import { freepassActionCreator } from '../utils/ActionCreatorUtils';

/*
  SET_PAGINATION: TOGGLE,
  SET_PAGE_IN_PAGINATION: TOGGLE,
  SET_COUNT_IN_PAGINATION: TOGGLE,
  SET_SORT_BY_IN_PAGINATION: TOGGLE,
  SET_ORDER_BY_IN_PAGINATION: TOGGLE,
*/
const getOrderByType = (prevOrderBy, prevSortBy, nextSortBy) => {
  // if first init,
  if (!prevSortBy) {
    return 'DESC';
  }

  if (prevSortBy === nextSortBy) {
    if (prevOrderBy === 'DESC') {
      return 'ASC';
    }
  }
  return 'DESC';
};

const setPaginationEpic = (action$, store$) => {
  const TYPE = LOCAL_PAGINATION.SET_PAGINATION;
  return action$
    .ofType(TYPE.REQUEST)
    .switchMap(async ({ payload }) => {
      const [payloadName] = Object.keys(payload);
      if (!payloadName) {
        throw new Error('Not found requirement "payloadName" parameter');
      }
      const pagination = payload[payloadName];
      const prevState = await store$.getState().paginationEpics;
      const prevPagination = prevState[payloadName];

      const sortBy = pagination.sortBy || prevPagination.sortBy;
      const orderBy = getOrderByType(
        prevPagination.orderBy || pagination.orderBy,
        prevPagination.sortBy,
        pagination.sortBy,
      );
      const totalPage = pagination.totalPage || prevPagination.totalPage;

      return {
        [payloadName]: {
          page: pagination.page || prevPagination.page,
          count: pagination.count || prevPagination.count,
          sortBy,
          orderBy,
          totalPage,
        },
      };
    })
    .map(payload => ({
      type: TYPE.SUCCESS,
      payload,
    }))
    .catch(error => [freepassActionCreator(TYPE.FAILURE, error.message)]);
};

export { setPaginationEpic };

export default {
  setPaginationEpic,
};
