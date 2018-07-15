import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  return (
    <div>
      <p><strong>The page "{props.location.pathname}" does not exist.</strong></p>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
