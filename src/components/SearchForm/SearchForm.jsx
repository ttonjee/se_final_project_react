import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!query.trim()) {
      setError("Please enter a keyword");
      return;
    }

    if (onSearch) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (error) setError("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__field">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter topic"
          className={`search-form__input ${
            error ? "search-form__input_error" : ""
          }`}
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </div>
      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;
