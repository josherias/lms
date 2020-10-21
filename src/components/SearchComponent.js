import React from "react";
import "../styles/SearchComponent.css";
import InputComponent from "./InputComponent";

import SearchIcon from "@material-ui/icons/Search";

function SearchComponent() {
  return (
    <div className="search__component">
      <input type="text" placeholder="Find a Course" />
      <button className="icon">
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchComponent;
