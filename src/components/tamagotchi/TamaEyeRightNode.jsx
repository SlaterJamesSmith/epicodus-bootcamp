import React from 'react';
import TamaEye from './TamaEye';

function TamaEyeRightNode() {
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
      <TamaEye/>
    </div>
  );
}

export default TamaEyeRightNode;
