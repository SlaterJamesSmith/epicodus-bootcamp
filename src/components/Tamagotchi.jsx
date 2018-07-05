import React from 'react';

function Tamagotchi(){
  return(
    <section>
      <style jsx>
        {`
          section {
            height: 100%;
            position: relative;
          }

          .tamagotchi-root {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            bottom: 15%;
          }

          .tamagotchi {
            height: 175px;
            width: 200px;
            position: absolute;
            bottom: 0;
            transform-origin: bottom;
            border-radius: 100%;
            background-color: #e00;
            z-index: 10;
            animation: bounce 1.25s linear infinite;
          }

          .shadow {
            height: 75px;
            width: 200px;
            position: absolute;
            bottom: -25px;
            transform-origin: bottom;
            border-radius: 100%;
            background-color: #333e;
            animation: shadow-bounce 1.25s linear infinite;
          }

          @keyframes bounce {
            0% {transform: scale(1.1, 0.9) translate(0, 0);}
            5% {transform: scale(1, 1) translate(0, 0);}
            25% {transform: scale(0.9, 1.1) translate(0, -50px);}
            50% {transform: scale(1, 0.95) translate(0, -100px);}
            75% {transform: scale(0.9, 1.1) translate(0, -50px);}
            95% {transform: scale(1, 1) translate(0, 0);}
            100% {transform: scale(1.1, 0.9) translate(0, 0);}
          }

          @keyframes shadow-bounce {
            0% {transform: scale(1.1); filter: blur(1px);}
            5% {transform: scale(1); background-color: #333e; filter: blur(2px);}
            50% {transform: scale(0.75); background-color: #3339; filter: blur(10px);}
            95% {transform: scale(1); background-color: #333e; filter: blur(2px);}
            100% {transform: scale(1.1); filter: blur(1px);}
          }
        `}
      </style>
      <div className='tamagotchi-root'>
        <div className='tamagotchi'></div>
        <div className='shadow'></div>
      </div>
    </section>
  );
}

export default Tamagotchi;
