import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navLink = {
    color: 'red',
    fontSize: '0.9rem',
    fontWeight: '500',
    textDecoration: 'none',
    textTransform: 'uppercase'
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
        <Link to="/search"><button>Search</button></Link>
      </div>
      <ul>
        <li><Link to="/video" style={navLink}>Video</Link></li>
        <li><Link to="/signin" style={navLink}>Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
