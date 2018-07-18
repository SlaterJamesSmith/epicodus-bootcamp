import React from 'react';
import TamaEye from './TamaEye';

function TamaEyeLeftNode() {
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
      <TamaEye/>
    </div>
  );
}

export default TamaEyeLeftNode;
