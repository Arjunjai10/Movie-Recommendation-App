import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div style={{ margin: '20px auto', width: '90%', maxWidth: '600px' }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          fontSize: '1rem'
        }}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;