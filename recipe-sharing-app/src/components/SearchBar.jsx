import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search recipes..."
      style={{
        padding: '10px',
        width: '100%',
        marginBottom: '20px',
        fontSize: '16px',
      }}
    />
  );
};

export default SearchBar;
