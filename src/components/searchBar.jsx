import React from "react";

export default function SearchBar({ searchQuery, onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}
