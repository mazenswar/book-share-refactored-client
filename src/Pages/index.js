import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthForm from './AuthForm';
import Profile from './Profile';
import Nav from '../Components/Nav';
import DonateBookForm from './DonateBookForm';
import '../Stylesheets/index.scss';
import { useSelector } from 'react-redux';
import Books from './Books';
import Book from './BookShow';

export default function Pages() {
  const user = useSelector((state) => state.user);
  function generateRoutes() {
    if (user.id) {
      return (
        <>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Book} />
          <Route exact path="/books/donate" component={DonateBookForm} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/users/:id" component={Profile} />
        </>
      );
    }
    return (
      <>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Book} />
        <Route exact path="/auth" component={AuthForm} />
      </>
    );
  }
  return (
    <Router>
      <Nav />
      <Switch>{generateRoutes()}</Switch>
    </Router>
  );
}
