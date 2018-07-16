import React from 'react';

function Home() {
  return (
    <section>
      <style jsx>
        {`
          h1, p {
            margin: 0;
            text-align: center;
            text-transform: uppercase;
            word-break: break-all;
          }

          h1 {
            color: #f09;
            font-size: 3rem;
          }

          p {
            margin-bottom: 10px;
            font-weight: bold;
          }
        `}
      </style>
      <p>Welome to</p>
      <h1>Super<br/>Tamagotchi</h1>
    </section>
  );
}

export default Home;
