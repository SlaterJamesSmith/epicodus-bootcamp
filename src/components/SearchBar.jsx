import React from 'react';
import SearchBtn from './buttons/SearchBtn';
import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <form>
      <style jsx>
        {`
          form {
            display: flex;
            align-items: center;
          }

          input {
            height: 30px;
            min-width: 50px;
            width: 100%;
            padding: 0 10px;
            border: 1px solid #ccc;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            font-size: 0.9rem;
            z-index: 10;
          }
        `}
      </style>
      <input type="text" placeholder="search"/>
      <Link to="/search"><SearchBtn/></Link>
    </form>
  );
}

export default SearchBar;
