import { combineReducers } from 'redux';

import AuthenticationReducers from './AuthenticationReducers';
import { paginationReducer } from './PaginationReducers';

export default combineReducers({
  pagination: paginationReducer,
  authentication: AuthenticationReducers,
});
