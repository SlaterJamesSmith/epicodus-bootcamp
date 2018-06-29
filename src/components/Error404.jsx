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
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 25px;
          }

          strong {
            color: #f00;
          }
        `}
      </style>
      <p><strong>The page "{props.location.pathname}" does not exist.</strong></p>
      <p>Would you like to return <Link to="/" style={navLink}>home</Link> instead?</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
