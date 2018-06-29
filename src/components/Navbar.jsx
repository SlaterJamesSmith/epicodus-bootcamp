import React from 'react';
import NavbarBtn from './buttons/NavbarBtn';
import SearchBar from './SearchBar';
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
          nav, ul, li {
            display: flex;
            align-items: center;
          }

          nav {
            height: 55px;
            width: 100%;
            justify-content: space-between;
            padding: 0 15px;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
          }

          ul {
            margin: 0;
            padding: 0;
          }

          li {
            margin-right: 5px;
            list-style: none;
          }
        `}
      </style>
      <ul>
        <li><NavbarBtn type="tribar"/></li>
        <li><Link to="/" style={navLink}>Home</Link></li>
      </ul>
      <SearchBar/>
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
