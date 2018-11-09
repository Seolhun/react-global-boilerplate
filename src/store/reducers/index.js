import { combineReducers } from 'redux';

// eslint-disable-next-line import/no-named-as-default
import PaginationReducers from './PaginationReducers';

export default combineReducers({
  pagination: PaginationReducers,
});
