import React from 'react';
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
            height: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 105px 0 75px;
          }
        `}
      </style>
      <p><strong>Hmmm, where did your tamagotchi go?</strong></p>
      <p><Link style={LINK} to="/">Go Home</Link></p>
    </section>
  );
}

export default Error404;
