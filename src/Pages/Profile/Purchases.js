import React from 'react';
import BookTile from '../Books/BookTile';

export default function Purchases({ purchases }) {
  function renderPurchases() {
    return !purchases.length
      ? null
      : purchases.map((p) => {
          return <BookTile key={p.id} donation={p} />;
        });
  }
  return (
    <div className="query-results" id="profile-purchases-container">
      <h1>Purchases</h1>
      {renderPurchases()}
    </div>
  );
}
