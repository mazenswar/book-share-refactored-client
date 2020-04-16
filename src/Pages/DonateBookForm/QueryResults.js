import React from 'react';
import Input from './Input';
import { renderResults } from './helpers';

export default function QueryResults({
  handleSelectBook,
  results,
  handleSubmit,
}) {
  return (
    <>
      <Input handleSubmit={handleSubmit} />
      <div className="query-results">
        {renderResults(results, handleSelectBook)}
      </div>
    </>
  );
}
