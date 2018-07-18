import React from 'react';
import TamaMouth from './TamaMouth';
import TamaEyeNode from './TamaEyeNode';

function TamaFaceNode() {
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
      <TamaEyeNode/>
      <TamaMouth/>
    </div>
  );
}

export default TamaFaceNode;
