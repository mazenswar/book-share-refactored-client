import React from 'react';
import SearchResult from './SearchResult';

export function formatBooks(arr) {
  return arr.map((obj) => {
    const {
      title,
      authors: initialAuthors,
      description,
      industryIdentifiers: industry_identifiers,
      pageCount: page_count,
      averageRating: average_rating,
      categories: initialCategories,
      imageLinks: image_link,
      previewLink: preview_link,
      infoLink: info_link,
      publisher,
      publishedDate: pdate,
      language,
    } = obj.volumeInfo;
    let authors = initialAuthors ? initialAuthors : null;
    let categories = initialCategories ? initialCategories : null;
    return {
      gid: obj.id,
      title,
      authors,
      description,
      industry_identifiers,
      page_count,
      average_rating,
      categories,
      image_link: {
        thumb: image_link.thumbnail || null,
        small_thumb: image_link.smalThumbnail || null,
      },
      preview_link,
      info_link,
      language,
      publisher,
      pdate,
      condition: 1,
    };
  });
}

// t.string "title"
// t.integer "page_count"
// t.integer "average_rating"
// t.string "language"
// t.string "preview_link"
// t.string "info_link"
// t.string "description"
// t.string "gid"

// t.string "title"
// t.integer "page_count"
// t.integer "average_rating"
// t.string "language"
// t.string "preview_link"
// t.string "info_link"
// t.string "snippet"

export function url(query) {
  return `https://www.googleapis.com/books/v1/volumes?q=${query}`;
}

const initialMessageStyle = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const initialMessageDiv = (
  <div style={initialMessageStyle}>
    <h2>No books yet fam</h2>
  </div>
);

export function renderResults(results, handleSelectBook) {
  return !results.length
    ? initialMessageDiv
    : results.map((r) => {
        return (
          <SearchResult
            key={r.gid}
            book={r}
            handleSelectBook={handleSelectBook}
          />
        );
      });
}

export function fetchQuery(search) {
  return fetch(url(search)).then((r) => r.json());
}
