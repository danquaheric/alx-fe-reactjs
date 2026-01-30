import React, { useState } from 'react';
import { searchUsers } from '../services/githubAPI';

const SearchBar = ({ setUsers }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
