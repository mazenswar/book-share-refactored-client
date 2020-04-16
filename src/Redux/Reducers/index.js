import { combineReducers } from 'redux';

import user from './usersReducer';
import books from './booksReducer';
export default combineReducers({
  user,
  books,
});
