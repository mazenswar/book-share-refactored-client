import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookTile from './BookTile';
import { stz } from '../../Helpers';

export default function Books() {
  const username = useSelector((state) => state.user.username);
  const donations = useSelector((state) => state.books);
  const [search, setSearch] = useState('');
  const [sortByCredits, setSortByCredits] = useState(false);
  const [sortByCondition, setSortByCondition] = useState(false);
  function handleCheckbox(e) {
    e.target.name === 'credits'
      ? setSortByCredits(e.target.checked)
      : setSortByCondition(e.target.checked);
  }

  function renderDonationBooks() {
    if (!donations.length) return 'No books yet';
    let arr = donations.filter((d) => stz(d.book.title).includes(stz(search)));
    if (sortByCredits) {
      arr = arr.sort((a, b) => a.worth - b.worth);
    }
    if (sortByCondition) {
      arr = arr.sort((a, b) => b.condition - a.condition);
    }
    if (!arr.length)
      return (
        <div className="message-div">
          <h1>We didn't find any books fam</h1>
        </div>
      );
    return (
      <div className="query-results home-results">
        {arr.map((b) => (
          <BookTile key={'profile-' + b.id} donation={b} />
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="home-inputs-container">
        <h1>Welcome {username ? username : 'Fellow Reader'}</h1>
        <input
          type="text"
          name="search"
          placeholder="Search Books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="checkbox-container">
          <label htmlFor="credits"> Sort by credits</label>
          <input
            type="checkbox"
            name="credits"
            value={sortByCredits}
            onChange={handleCheckbox}
          />
          <label htmlFor="condition"> Sort by condition</label>
          <input
            type="checkbox"
            name="condition"
            value={sortByCondition}
            onChange={handleCheckbox}
          />
        </div>
      </div>
      {renderDonationBooks()}
    </>
  );
}
