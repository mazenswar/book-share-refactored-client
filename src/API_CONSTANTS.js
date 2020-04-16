const BASE_URL = 'http://localhost:3000';
const BOOKS_URL = BASE_URL + '/available-books';
const USERS_URL = BASE_URL + '/users';
const userUrl = (id) => USERS_URL + '/' + id;
const purchaseUrl = (id) => BASE_URL + '/get/' + id;
const PERSIST_URL = BASE_URL + '/auth';
const DONATIONS_URL = BASE_URL + '/donations';
const LOGIN_URL = BASE_URL + '/login';
const BASE_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export default {
  BASE_URL,
  userUrl,
  purchaseUrl,
  USERS_URL,
  PERSIST_URL,
  LOGIN_URL,
  BASE_HEADERS,
  BOOKS_URL,
  DONATIONS_URL,
};
