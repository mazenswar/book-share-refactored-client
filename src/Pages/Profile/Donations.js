import React from 'react';
import BookTile from '../Books/BookTile';
export default function Donations({ donations }) {
  function renderDonations() {
    return !donations.length
      ? null
      : donations.map((d) => {
          return <BookTile key={d.id} donation={d} />;
        });
  }
  return (
    <div className="query-results" id="profile-donations-container">
      <h1>Donations</h1>
      {renderDonations()}
    </div>
  );
}
