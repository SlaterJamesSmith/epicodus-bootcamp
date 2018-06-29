import React from 'react';
import SearchBtn from './buttons/SearchBtn';
import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <div id="search">
      <style jsx>
        {`
          #search {
            width: 50%;
            max-width: 600px;
            display: flex;
            align-items: center;
          }

          input {
            height: 30px;
            width: 100%;
            padding: 0 10px;
            border: 1px solid #ccc;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            font-size: 0.9rem;
          }
        `}
      </style>
      <input type="text" placeholder="search"/>
      <Link to="/search"><SearchBtn/></Link>
    </div>
  );
}

export default SearchBar;
