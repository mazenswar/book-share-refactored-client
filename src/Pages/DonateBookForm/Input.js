import React, { useState } from 'react';

export default function Input({ handleSubmit }) {
  const [search, setSearch] = useState('');
  return (
    <div className="input-container">
      <input
        type="text"
        value={search}
        placeholder="What book would you like to donate?"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => handleSubmit(search)}>Search</button>
    </div>
  );
}
