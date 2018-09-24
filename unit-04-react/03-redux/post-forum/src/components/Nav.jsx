import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navLink = {
    color: 'magenta',
    marginRight: '25px',
    textDecoration: 'none',
    textTransform: 'uppercase'
  };

  return (
    <nav>
      <style jsx>
        {`
          nav {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #08f;
          }

          h1 {
            font-size: 2rem;
          }
        `}
      </style>
      <Link to="/" style={navLink}><h1>COFFEE BLOG</h1></Link>
      <Link to="/postform" style={navLink}>Add Post</Link>
    </nav>
  );
}

export default Nav;
