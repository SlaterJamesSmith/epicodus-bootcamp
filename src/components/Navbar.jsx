import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navLink = {
    color: 'red',
    textDecoration: 'none'
  };
  return (
    <nav>
      <style jsx>
        {`
          nav {
            height: 54px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
          }

          ul {
            display: flex;
          }

          li {
            margin-right: 10px;
            list-style: none;
          }

          a, a:visited {
            text-decoration: none;
          }

          #search-input {
            width: 50%;
            display: flex;
          }

          input {
            width: 100%;
          }
        `}
      </style>
      <ul>
        <li><Link to="/" style={navLink}>Home</Link></li>
      </ul>
      <div id="search-input">
        <input type="text" placeholder="search"/>
        <Link to="/search" style={navLink}><button>Search</button></Link>
      </div>
      <ul>
        <li><Link to="/video" style={navLink}>Video</Link></li>
        <li><Link to="/signin" style={navLink}>Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
