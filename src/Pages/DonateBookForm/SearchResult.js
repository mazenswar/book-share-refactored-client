import React from 'react';

export default function SearchResult({ book, handleSelectBook }) {
  function width() {
    let width = Math.round(Math.random() * (75 - 60) + 60);
    return `${width}%`;
  }

  function handleHover(e) {
    if (e.target.className === 'query-result') {
      e.target.style.width = '99%';
    }
  }

  function handleLeave(e) {
    if (e.target.className === 'query-result') {
      e.target.style.width = width();
    }
  }

  return (
    <div
      className="query-result"
      onClick={() => handleSelectBook(book)}
      style={{ width: width() }}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {book.image_link.thumb ? (
        <img src={book.image_link.thumb} alt={book.title} />
      ) : null}
      <div className="book-deets">
        <h2>
          {book.title} <span style={{ fontWeight: '300' }}>({book.pdate})</span>
        </h2>
        {book.authors ? <span>By {book.authors.join(', ')}</span> : null}
      </div>
    </div>
  );
}

// function isbn(ii) {
//   return (
//     <div className="isbn-container">
//       {ii.map((x) => (
//         <span>{x.type + ': ' + x.identifier}</span>
//       ))}
//     </div>
//   );
// }
