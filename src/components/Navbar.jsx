import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/video">Video</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
