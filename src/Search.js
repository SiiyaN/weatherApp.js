import React from "react";

export default function Search() {
  return (
    <form className="Search" id="search-form">
      <input
        type="search"
        placeholder="What is your city?"
        className="search-form-input"
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );
}
