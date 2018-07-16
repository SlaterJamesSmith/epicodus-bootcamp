import React from 'react';
import NavbarBtn from './buttons/NavbarBtn';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const navLink = {
    color: 'red',
    textDecoration: 'none'
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

          .logo-link {
            padding: 0 15px;
            font-size: 1.2rem;
            font-weight: 700;
            transform: scaleX(0.75);
          }

          .logo-link span {
            letter-spacing: -3px;
          }

          .signin-link {
            min-width: 81px;
            padding: 0 15px;
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
          }

          .search-bar {
            width: 100%;
            max-width: 400px;
            padding: 0 10px 0 5px;
          }

          @media screen and (max-width: 524px) {
            li {
              margin-right: 0;
            }

            .collapsible {
              display: none;
            }

            .logo-link {
              padding-left: 0;
            }

            .search-bar {
              padding: 0 5px;
            }
          }
        `}
      </style>
      <ul>
        <li className="collapsible"><NavbarBtn type="tribar"/></li>
        <li className="logo-link"><Link to="/" style={navLink}><span>Y</span>o<span>uT</span>ube</Link></li>
      </ul>
      <div className="search-bar">
        <SearchBar onVideoSearch={props.onVideoSearch} />
      </div>
      <ul>
        <li className="collapsible"><NavbarBtn type="video"/></li>
        <li className="collapsible"><NavbarBtn type="apps"/></li>
        <li><NavbarBtn type="settings"/></li>
        <li className="collapsible signin-link"><Link to="/signin" style={navLink}>Sign In</Link></li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  onVideoSearch: PropTypes.func
};

export default Navbar;
