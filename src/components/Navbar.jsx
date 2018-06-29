import React from 'react';
import NavbarBtn from './buttons/NavbarBtn';
import { Link } from 'react-router-dom';

function Navbar() {
  const navLink = {
    padding: '0 15px',
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
            height: 55px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
          }

          ul {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
          }

          li {
            display: flex;
            align-items: center;
            margin-right: 5px;
            list-style: none;
          }

          #search-input {
            width: 50%;
            max-width: 600px;
            display: flex;
          }

          input {
            width: 100%;
          }
        `}
      </style>
      <ul>
        <li><NavbarBtn type="tribar"/></li>
        <li><Link to="/" style={navLink}>Home</Link></li>
      </ul>
      <div id="search-input">
        <input type="text" placeholder="search"/>
        <Link to="/search"><button>Search</button></Link>
      </div>
      <ul>
        <li><NavbarBtn type="video"/></li>
        <li><NavbarBtn type="apps"/></li>
        <li><NavbarBtn type="settings"/></li>
        <li><Link to="/signin" style={navLink}>Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
