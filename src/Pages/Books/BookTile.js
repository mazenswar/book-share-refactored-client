import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pYear, dDate } from '../../Helpers/index';
import { useSelector } from 'react-redux';

export default function BookTile({ donation }) {
  const url = useLocation();
  console.log(url);

  const userId = useSelector((state) => state.user.id);
  function width() {
    let width = Math.round(Math.random() * (75 - 60) + 60);
    if (userId) {
      width = Math.round(Math.random() * (90 - 85) + 85);
    }
    return `${width}%`;
  }

  function handleHover(e) {
    if (e.target.className === 'list-item') {
      e.target.style.width = '99%';
    }
  }

  function handleLeave(e) {
    if (e.target.className === 'list-item') {
      e.target.style.width = width();
    }
  }

  const { book } = donation;
  return (
    <Link
      to={'/books/' + donation.id}
      className="list-item"
      onClick={() => console.log(donation)}
      style={{ width: width() }}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {book ? <img src={book.image_link.thumb} alt={book.title} /> : null}
      <div className="book-deets">
        <h2>
          {book.title}
          <span style={{ fontWeight: '300' }}>({pYear(book.pdate)})</span>
        </h2>
        {donation.authors ? <span>By {book.authors.join(', ')}</span> : null}
        <span>
          {donation.ddate ? `donated on ${dDate(donation.ddate)}` : null}
        </span>
        <span>
          {donation.purchased_on
            ? `purchased on ${dDate(donation.purchased_on)}`
            : null}
        </span>
        {userId === donation.user_id ? null : (
          <>
            <span>Donated by {donation.by}</span>
            <span>Price: {donation.worth} credits</span>
            <span>Condition: {donation.condition}</span>
          </>
        )}
      </div>
    </Link>
  );
}
