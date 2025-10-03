import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Validation: Check if input is empty
    if (!query.trim()) {
      setError('Please enter a keyword');
      return;
    }
    
    // If validation passes, call the search function
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__field">
        <input
          className={`search-form__input ${error ? 'search-form__input_error' : ''}`}
          type="text"
          placeholder="Enter topic"
          value={query}
          onChange={handleInputChange}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </div>
      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;