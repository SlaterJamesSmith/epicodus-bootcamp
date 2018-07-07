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
            padding: 50px;
          }

          h2 {
            margin: 0 0 25px;
            color: #f00;
            word-wrap: break-word;
          }

          h2, p {
            text-align: center;
          }
        `}
      </style>
      <h2><strong>No content found at<br/>{props.currentRoute}.</strong></h2>
      <p>Return to <Link to="/" style={navLink}>YouTube (Rebuild)</Link>.</p>
    </div>
  );
}

Error404.propTypes = {
  currentRoute: PropTypes.string.isRequired
};

export default Error404;
