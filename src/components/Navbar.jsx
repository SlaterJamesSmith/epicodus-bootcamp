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
            border-bottom: 1px solid #eee;
            box-shadow: 0 1px 5px 0 #eee;
          }

          ul {
            margin: 0;
            padding: 0;
          }

          li {
            margin-right: 5px;
            list-style: none;
          }

          li:last-child {
            margin-right: 0;
          }

          .collapsible {
            display: inherit;
          }

          .search-bar {
            width: 100%;
            max-width: 400px;
            padding: 0 10px 0 5px;
          }

          .sign-in-link {
            min-width: 81px;
          }

          @media screen and (max-width: 524px) {
            li {
              margin-right: 0;
            }

            .collapsible {
              display: none;
            }

            .search-bar {
              padding: 0 5px;
            }
          }
        `}
      </style>
      <ul>
        <li className="collapsible"><NavbarBtn type="tribar"/></li>
        <li><Link to="/" style={navLink}>Home</Link></li>
      </ul>
      <div className="search-bar">
        <SearchBar/>
      </div>
      <ul>
        <li className="collapsible"><NavbarBtn type="video"/></li>
        <li className="collapsible"><NavbarBtn type="apps"/></li>
        <li><NavbarBtn type="settings"/></li>
        <li className="collapsible sign-in-link"><Link to="/signin" style={navLink}>Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
