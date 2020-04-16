import React, { useState } from 'react';
import { fetchQuery, formatBooks } from './helpers';
import QueryResults from './QueryResults';
import BookDetails from './BookDetails';
import ConfirmationPage from './ConfirmationPage';

export default function DonateBookForm() {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [BTD, setBTD] = useState({});

  function handleSubmit(search) {
    fetchQuery(search).then((data) => {
      let arr = formatBooks(data.items);
      setResults(arr);
    });
  }

  function handleSelectBook(book) {
    setBTD(book);
    setPage(2);
  }

  // {renderResults(results)}
  function renderPage() {
    switch (page) {
      case 1:
        return (
          <QueryResults
            handleSelectBook={handleSelectBook}
            results={results}
            handleSubmit={handleSubmit}
          />
        );
      case 2:
        return <BookDetails setPage={setPage} BTD={BTD} setBTD={setBTD} />;
      case 3:
        return <ConfirmationPage BTD={BTD} />;
      case 4:
      default:
        return null;
    }
  }

  // function switchPage() {
  //   if (page === 1) {
  //     return (
  //       <>
  //         <button onClick={() => setPage(page + 1)}>Next</button>
  //         <button disabled>Previous</button>
  //       </>
  //     );
  //   } else if (page === 4) {
  //     return (
  //       <>
  //         <button disabled>Next</button>
  //         <button onClick={() => setPage(page - 1)}>Previous</button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <button onClick={() => setPage(page + 1)}>Next</button>
  //         <button onClick={() => setPage(page - 1)}>Previous</button>
  //       </>
  //     );
  //   }
  // }

  // {switchPage()}
  return <div className="donation-container">{renderPage()}</div>;
}

// <Input search={search} setSearch={setSearch}/>
