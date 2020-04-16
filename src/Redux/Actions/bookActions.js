import API from '../../API_CONSTANTS';
import { setUserAction } from './userActions';

const setBooksAction = (books) => ({
  type: 'SET_BOOKS',
  payload: books,
});

const bookPurchasedAction = (bookId) => ({
  type: 'P_BOOK',
  payload: bookId,
});

const getBooksFromAPI = () => (dispatch) => {
  fetch(API.BOOKS_URL)
    .then((r) => r.json())
    .then((books) => {
      dispatch(setBooksAction(books));
    });
};

const handlePurchase = (donation) => (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      ...API.BASE_HEADERS,
      Authorization: 'bearer ' + localStorage.token,
    },
  };
  fetch(API.purchaseUrl(donation.id), config)
    .then((r) => r.json())
    .then((user) => {
      dispatch(bookPurchasedAction(donation.id));
      dispatch(setUserAction(user));
    });
};

export default {
  getBooksFromAPI,
  handlePurchase,
};
