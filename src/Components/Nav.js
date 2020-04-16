import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Nav() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function generateLinks() {
    if (user.id) {
      function handleLogout() {
        localStorage.clear();
        dispatch({ type: 'CLEAR_USER' });
      }
      return (
        <>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/books">Books</Link>
          <Link to="/books/donate">Donate</Link>
          <Link onClick={handleLogout} to="/">
            Logout
          </Link>
        </>
      );
    }
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/auth">Auth</Link>
      </>
    );
  }
  return <nav>{generateLinks()}</nav>;
}
