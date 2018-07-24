import React from 'react';
import { Link } from 'react-router-dom';

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

          h2 {
            width: 100px;
            padding: 10px;
            margin: 50px auto;
            border-radius: 10px;
            color: #fff;
            background-color: #f09;
            text-align: center;
            animation: play-button 2s linear infinite;
          }

          p {
            margin-bottom: 10px;
            font-weight: bold;
          }

          @keyframes play-button {
            0% {transform: scale(1);}
            50% {transform: scale(1.1);}
            100% {transform: scale(1);}
          }
        `}
      </style>
      <p>Welcome to</p>
      <h1>Super<br/>Tamagotchi</h1>
      <Link to="/tamagotchi"><h2>Play</h2></Link>
    </section>
  );
}

export default Home;
