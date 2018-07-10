import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <h1>COFFEE BLOG</h1>
      <Link to="/">Home</Link> | <Link to="/postform">Add Post</Link>
    </div>
  );
}

export default Nav;
