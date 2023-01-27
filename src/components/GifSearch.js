import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const [search, setSearch] = useState("");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    onSubmit(search);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="search">Enter a Search Term:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;