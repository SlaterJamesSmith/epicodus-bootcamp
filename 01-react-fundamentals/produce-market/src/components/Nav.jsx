import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <Link to="/">Schedule</Link> | <Link to="/produce">Produce</Link>
    </div>
  );
}

export default Nav;
