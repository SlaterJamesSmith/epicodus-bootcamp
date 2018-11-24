import React from 'react';
import TamaHeadNode from './TamaHeadNode';
import PropTypes from 'prop-types';

function Tamagotchi(props) {
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

            5% {transform: translate(-50px, 100px);}
            21% {transform: translate(-10px, 5px);}
            25% {transform: translate(0, 0);}
            29% {transform: translate(10px, 5px);}
            45% {transform: translate(50px, 100px);}

            55% {transform: translate(50px, 100px);}
            71% {transform: translate(10px, 5px);}
            75% {transform: translate(0, 0);}
            79% {transform: translate(-10px, 5px);}
            95% {transform: translate(-50px, 100px);}

            100% {transform: translate(-50px, 100px);}
          }

          .animate-idle {
            animation: bounce 2s linear infinite;
          }
        `}
      </style>
      <TamaHeadNode
        petStatus={props.petStatus}
        petConditions={props.petConditions}
      />
    </section>
  );
}

Tamagotchi.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired
};

export default Tamagotchi;
