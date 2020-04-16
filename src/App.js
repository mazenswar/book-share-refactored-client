import React, { useEffect } from 'react';
import './App.css';
import Pages from './Pages';
import { useDispatch } from 'react-redux';
import userActions from './Redux/Actions/userActions';
import bookActions from './Redux/Actions/bookActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.persistUserFromAPI());
    dispatch(bookActions.getBooksFromAPI());
  }, [dispatch]);

  return <Pages />;
}

export default App;
