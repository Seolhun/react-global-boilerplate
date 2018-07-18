import { combineEpics } from 'redux-observable';

import { getLoginInfoEpic, postLogin } from './AuthenticationEpics';
import { setPaginationEpic } from './PaginationEpics';

export default combineEpics(setPaginationEpic, getLoginInfoEpic, postLogin);
