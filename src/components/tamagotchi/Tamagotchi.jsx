import React from 'react';
import TamaHeadNode from './TamaHeadNode';

function Tamagotchi() {
  return (
    <section className="tamagotchi animate-idle">
      <style jsx>
        {`
          .tamagotchi {
            height: 0;
            width: 0;
          }

          @keyframes bounce {
            0% {transform: translate(-50px, 100px);}
            20% {transform: translate(-10px, 5px);}
            25% {transform: translate(0, 0);}
            30% {transform: translate(10px, 5px);}
            50% {transform: translate(50px, 100px);}
            70% {transform: translate(10px, 5px);}
            75% {transform: translate(0, 0);}
            80% {transform: translate(-10px, 5px);}
            100% {transform: translate(-50px, 100px);}
          }

          .animate-idle {
            animation: bounce 1.5s linear infinite;
          }
        `}
      </style>
      <TamaHeadNode/>
    </section>
  );
}

export default Tamagotchi;
