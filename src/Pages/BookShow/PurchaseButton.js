import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import bookActions from '../../Redux/Actions/bookActions';

function PurchaseButton({ user, book }) {
  const dispatch = useDispatch();
  const history = useHistory();
  function handleSubmit() {
    dispatch(bookActions.handlePurchase(book));
    history.push('/books');
  }
  if (!user.id) {
    return (
      <Link style={{ color: 'aqua' }} to="/auth">
        Please log in or register to purchase books
      </Link>
    );
  }
  if (user.id === book.user_id) {
    return <p>You donated this book bruv</p>;
  }
  if (user.credits >= book.worth) {
    return <button onClick={handleSubmit}>Purchase this B</button>;
  }
  return <button disabled>Don't have enough credits for this B</button>;
}

export default PurchaseButton;
