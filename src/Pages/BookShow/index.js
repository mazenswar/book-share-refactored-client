import React, { useEffect } from 'react';
import PurchaseButton from './PurchaseButton';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dDate } from '../../Helpers';

export default function Book() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const donation = useSelector((state) => {
    return state.books.find((b) => b.id === parseInt(id));
  });

  if (donation) {
    const { book } = donation;
    return (
      <div className="book-details-container" id="show-page">
        <img src={book.image_link.thumb} alt={book.title} />
        <div className="book-details-txt">
          <h1>{book.title}</h1>
          {book.authors ? <h2>By {book.authors}</h2> : null}
          <p>{book.description}</p>
          <div className="book-meta-data">
            <span>Language: {book.language}</span>
            <span>Page Count: {book.pageCount}</span>
            <span>Average Rating: {book.average_rating}</span>
            <span>Genre: {book.categories ? book.categories[0] : 'N/A'}</span>
            <a href={book.preview_link}>Preview</a>
            <a href={book.info_link}>More Information</a>
            <span>
              Donated by{' '}
              <Link className="colored-link" to={'/users/' + donation.user_id}>
                {donation.by}
              </Link>
              on {dDate(donation.ddate)}
            </span>
          </div>
          <PurchaseButton user={user} book={donation} />
        </div>
      </div>
    );
  }
  return null;
}
