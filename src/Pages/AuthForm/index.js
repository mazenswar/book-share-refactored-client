import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { initialLoginState, initialSignupState } from './initialState';
import userActions from '../../Redux/Actions/userActions';

export default function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const initialState = login ? initialLoginState : initialSignupState;
  const [form, setForm] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    const endpoint = login ? '/login' : '/users';
    dispatch(userActions.createOrLoginUserToAPI(form, endpoint));
    history.push('/');
  }

  function switchFormButton() {
    return login ? (
      <Link to="/auth" onClick={() => setLogin(false)}>
        New here? Click here to create a new account
      </Link>
    ) : (
      <Link to="/auth" onClick={() => setLogin(true)}>
        Already have an account? Click here to Login
      </Link>
    );
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>{login ? 'Login' : 'Sign Up'}</h1>
        <Inputs login={login} form={form} setForm={setForm} />
        <input
          className="submit-button"
          type="submit"
          value={login ? 'Login' : 'Create Account'}
        />
        {switchFormButton()}
      </form>
    </div>
  );
}

function Inputs({ login, form, setForm }) {
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const loginInputs = (
    <>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
    </>
  );

  const signUpInputs = (
    <>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Full Name"
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
    </>
  );

  return login ? loginInputs : signUpInputs;
}
