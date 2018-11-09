import { combineEpics } from 'redux-observable';

import { setPaginationEpic } from './PaginationEpics';

export default combineEpics(setPaginationEpic);
