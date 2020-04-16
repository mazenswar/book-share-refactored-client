import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Purchases from './Purchases';
import Donations from './Donations';
import API from '../../API_CONSTANTS';

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const location = useLocation();
  const userObj = useSelector((state) => state.user);

  useEffect(() => {
    if (location.pathname === '/profile') {
      setUser(userObj);
    } else {
      return userObj.id === parseInt(id) ? null : fetchUser();
    }
  }, [userObj]);

  function fetchUser() {
    fetch(API.userUrl(id))
      .then((r) => r.json())
      .then((data) => {
        return data.errors ? null : setUser(data);
      });
  }

  if (user) {
    return (
      <div className="profile-page">
        <div className="user-data">
          <h1>{user.username}</h1>
          <h2>Credits {user.credits}</h2>
        </div>
        <Purchases purchases={user.purchases} />
        <Donations donations={user.donations} />
      </div>
    );
  }
  return null;
}
