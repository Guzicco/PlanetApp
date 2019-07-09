import React from "react";
// import "./Search.scss";

const Search = ({ setSearch }) => {
  return (
    <div className="sidebar-item search-box">
      <form onSubmit={event => setSearch(event.target[0].value)}>
        <label htmlFor="search-box">
          <input id="input-planet-name" placeholder="Planet name"></input>
          <button id="button-planet-name">Search</button>
        </label>
      </form>
    </div>
  );
};

export default Search;
