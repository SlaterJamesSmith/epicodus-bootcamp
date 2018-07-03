import React from 'react';
import Privacy from '../assets/images/privacy.png';
import { Link } from 'react-router-dom';

function Error404() {

  const LINK = {
    textDecoration: 'none',
    color: '#008bff',
    fontWeight: 'bold'
  };

  return (
    <section>
      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          img {
            margin-left: 24%;
          }
          `}
      </style>
      <img src={Privacy} alt='GET OUT!'/>
      <p><strong>You shouldn't be in here!</strong></p>
      <p><Link style={LINK} to="/">GET OUT!</Link></p>
    </section>
  );
}

export default Error404;
