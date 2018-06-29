import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  const navLink = {
    color: 'red',
    textDecoration: 'none'
  };

  return (
    <div>
      <style jsx>
        {`
          div {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          strong {
            color: #f00;
          }
        `}
      </style>
      <h2><strong>The page "{props.location.pathname}" does not exist.</strong></h2>
      <p>Let's go back <Link to="/" style={navLink}>home</Link>.</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
