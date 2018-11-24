import React from 'react';
import TamaEye from './TamaEye';
import PropTypes from 'prop-types';

function TamaEyeRightNode(props) {
  return (
    <div className="tama-eye-right-node">
      <style jsx>
        {`
          .tama-eye-right-node {
            height: 0;
            width: 0;
            position: absolute;
            right: 20px;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <TamaEye
        petStatus={props.petStatus}
        petConditions={props.petConditions}
      />
    </div>
  );
}

TamaEyeRightNode.propTypes = {
  petStatus: PropTypes.object.isRequired,
  petConditions: PropTypes.object.isRequired
};

export default TamaEyeRightNode;
