import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <section>
      <style jsx>
        {`
          h2, p {
            text-align: center;
          }
        `}
      </style>
      <h2>Where do you think <em>you're</em> going?</h2>
      <p>Your <Link to="/"><strong>Tamagotchi</strong></Link> needs you!</p>
    </section>
  );
}

export default Error404;
