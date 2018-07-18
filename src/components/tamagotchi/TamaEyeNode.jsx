import React from 'react';
import TamaEyeLeftNode from './TamaEyeLeftNode';
import TamaEyeRightNode from './TamaEyeRightNode';

function TamaEyeNode() {
  return (
    <div className="tama-eye-node">
      <style jsx>
        {`
          .tama-eye-node {
            height: 0;
            width: 0;
            position: absolute;
            bottom: 75px;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <TamaEyeLeftNode/>
      <TamaEyeRightNode/>
    </div>
  );
}

export default TamaEyeNode;
