import React from 'react';
import TamaEye from './TamaEye';
import PropTypes from 'prop-types';

function TamaEyeLeftNode(props) {
  return (
    <div className="tama-eye-left-node">
      <style jsx>
        {`
          .tama-eye-left-node {
            height: 0;
            width: 0;
            position: absolute;
            left: 20px;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <TamaEye petStatus={props.petStatus} />
    </div>
  );
}

TamaEyeLeftNode.propTypes = {
  petStatus: PropTypes.object.isRequired
};

export default TamaEyeLeftNode;
