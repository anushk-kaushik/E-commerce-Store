import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../actions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
