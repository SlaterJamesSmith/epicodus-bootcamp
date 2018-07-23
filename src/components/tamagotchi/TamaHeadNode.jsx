import React from 'react';
import TamaHead from './TamaHead';
import TamaFaceNode from './TamaFaceNode';
import PropTypes from 'prop-types';

function TamaHeadNode(props) {
  return (
    <div className="tama-head-node animate-idle">
      <style jsx>
        {`
          .tama-head-node {
            height: 0;
            width: 0;
            position: relative;
            display: flex;
            justify-content: center;
          }

          @keyframes rotate {
            0% {transform: rotate(15deg);}
            50% {transform: rotate(-15deg);}
            100% {transform: rotate(15deg);}
          }

          .animate-idle {
            animation: rotate 2s infinite;
          }
        `}
      </style>
      <TamaHead petStatus={props.petStatus} />
      <TamaFaceNode petStatus={props.petStatus} />
    </div>
  );
}

TamaHeadNode.propTypes = {
  petStatus: PropTypes.object.isRequired
};

export default TamaHeadNode;
