import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <section id="nav">
      <style jsx>
        {`
          #nav {
            height: 39px;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-bottom: 1px solid #f09;
            box-shadow: 0 2px 5px #0003;
            background-color: #fff;
            z-index: 100;
          }

          ul {
            display: flex;
            margin: 0;
            padding: 10px 20px;
          }

          li {
            margin-right: 25px;
            list-style: none;
            font-weight: bold;
            text-transform: uppercase;
          }
        `}
      </style>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </section>
  );
}

export default Nav;
