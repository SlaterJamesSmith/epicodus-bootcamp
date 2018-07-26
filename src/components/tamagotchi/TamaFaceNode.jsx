import React from 'react';
import TamaMouth from './TamaMouth';
import TamaEyePairNode from './TamaEyePairNode';
import PropTypes from 'prop-types';

function TamaFaceNode(props) {
  return (
    <div className="tama-face-node">
      <style jsx>
        {`
          .tama-face-node {
            height: 0;
            width: 0;
            position: relative;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <TamaEyePairNode
        petStatus={props.petStatus}
        petConditions={props.petConditions}
      />
      <TamaMouth
        petStatus={props.petStatus}
        petConditions={props.petConditions}
      />
    </div>
  );
}

TamaFaceNode.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired
};

export default TamaFaceNode;
