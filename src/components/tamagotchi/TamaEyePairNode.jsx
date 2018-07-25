import React from 'react';
import TamaEyeLeftNode from './TamaEyeLeftNode';
import TamaEyeRightNode from './TamaEyeRightNode';
import PropTypes from 'prop-types';

function TamaEyePairNode(props) {
  return (
    <div className="tama-eye-pair-node animate-idle">
      <style jsx>
        {`
          .tama-eye-pair-node {
            height: 0;
            width: 0;
            position: absolute;
            bottom: 75px;
            display: flex;
            justify-content: center;
          }

          @keyframes inertial-bounce {
            0% {transform: translateY(0);}
            10% {transform: translateY(8px);}
            40% {transform: translateY(4px);}
            50% {transform: translateY(0px);}
            60% {transform: translateY(-4px);}
            90% {transform: translateY(-8px);}
            100% {transform: translateY(0);}
          }

          .animate-idle {
            animation: inertial-bounce 1s linear infinite;
          }
        `}
      </style>
      <TamaEyeLeftNode
        petStatus={props.petStatus}
        petConditions={props.petConditions}
      />
      <TamaEyeRightNode
        petStatus={props.petStatus}
        petConditions={props.petConditions}
      />
    </div>
  );
}

TamaEyePairNode.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired
};

export default TamaEyePairNode;
