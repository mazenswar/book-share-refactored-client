import React from 'react';
import CustomSelect from '../../Components/CustomSelect';

export default function Book({ book }) {
  function handleChange(condition) {
    setBTD({ ...BTD, condition });
  }
  if (BTD) {
    console.log(JSON.stringify(BTD));
    return (
      <div className="bd">
        <div className="book-details-container">
          <img src={BTD.image_link.thumbnail} alt={BTD.title} />
          <div className="book-details-txt">
            <h1>{BTD.title}</h1>
            {BTD.authors ? <h2>By {BTD.authors}</h2> : null}
            <p>{BTD.description}</p>
            <div className="book-meta-data">
              <span>Language: {BTD.language}</span>
              <span>Page Count: {BTD.pageCount}</span>
              <span>Average Rating: {BTD.average_rating}</span>
              <span>Genre: {BTD.categories ? BTD.categories[0] : 'N/A'}</span>
              <a href={BTD.preview_link}>Preview</a>
              <a href={BTD.info_link}>More Information</a>
            </div>
          </div>
        </div>
        <div className="book-condition-container">
          <h1>What's the condition of this book?</h1>

          <CustomSelect callback={handleChange} />
          <div className="btn-container">
            <button onClick={() => setPage(3)}>Next</button>
            <button onClick={() => setPage(1)}>Back</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

// const BTD = {
//   gid: 'hoGkPfds4tAC',
//   title: 'Fight Club: A Novel',
//   authors: ['Chuck Palahniuk'],
//   description:
//     'The first rule about fight club is you don\'t talk about fight club. Chuck Palahniuk showed himself to be his generation’s most visionary satirist in this, his first book. Fight Club’s estranged narrator leaves his lackluster job when he comes under the thrall of Tyler Durden, an enigmatic young man who holds secret after-hours boxing matches in the basements of bars. There, two men fight "as long as they have to." This is a gloriously original work that exposes the darkness at the core of our modern world.',
//   industry_identifiers: [
//     { type: 'ISBN_10', identifier: '0393066398' },
//     { type: 'ISBN_13', identifier: '9780393066395' },
//   ],
//   page_count: 224,
//   average_rating: 4,
//   categories: ['Fiction'],
//   image_links: {
//     smallThumbnail:
//       'http://books.google.com/books/content?id=hoGkPfds4tAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
//     thumbnail:
//       'http://books.google.com/books/content?id=hoGkPfds4tAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//   },
//   preview_link:
//     'http://books.google.com/books?id=hoGkPfds4tAC&printsec=frontcover&dq=fight+club&hl=&cd=1&source=gbs_api',
//   info_link:
//     'https://play.google.com/store/books/details?id=hoGkPfds4tAC&source=gbs_api',
//   language: 'en',
//   publisher: 'W. W. Norton & Company',
//   pdate: '2005-10-17',
//   condition: 1,
// };
